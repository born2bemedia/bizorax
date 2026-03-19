'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import ReCAPTCHA from 'react-google-recaptcha';
import { Controller, useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import Select from 'react-select';
import countryList from 'react-select-country-list';

import { useAuthStore } from '@/features/account';
import { createOrder } from '@/features/cart/api/createOrder';
import { type CheckoutFormSchema, createCheckoutFormSchema } from '@/features/cart/model/checkout.schema';
import { useCartStore } from '@/features/cart/store/cart';

import { excludedCountries } from '@/shared/lib/helpers/excludedCountries';
import { Button } from '@/shared/ui/kit/button/Button';

import styles from './CheckoutForm.module.scss';

import 'react-phone-input-2/lib/style.css';

const ENABLE_RECAPTCHA = true;

type CountryOption = { value: string; label: string };

const allCountries = countryList().getData() as CountryOption[];
const countries = allCountries
  .filter((country: CountryOption) => !excludedCountries.includes(country.value.toLowerCase()))
  .sort((a: CountryOption, b: CountryOption) => a.label.localeCompare(b.label));

const defaultValues: CheckoutFormSchema = {
  firstName: '',
  lastName: '',
  address1: '',
  address2: '',
  city: '',
  country: '',
  zip: '',
  email: '',
  phone: '',
  orderNotes: '',
  termsAccepted: false,
  refundPolicyAccepted: false,
  recaptcha: '',
};

const copy = {
  checkoutTitle: 'Checkout',
  inYourCart: 'In Your Cart',
  serviceName: 'Service Name',
  totalPriceLabel: 'Total Price',
  quantityLabel: 'Quantity',
  subtotalLabel: 'Subtotal',
  decreaseQuantity: 'Decrease quantity',
  increaseQuantity: 'Increase quantity',
  price: 'Price, €',
  subtotal: 'Subtotal, €',
  total: 'Total',
  billingDetails: 'Billing Details',
  firstName: 'First Name',
  firstNamePlaceholder: 'Enter your name',
  lastName: 'Last Name',
  lastNamePlaceholder: 'Enter your last name',
  address1: 'Address Line 1',
  address1Placeholder: 'Enter your street address',
  address2: 'Address Line 2',
  optional: '(Optional)',
  address2Placeholder: 'Enter your street address',
  city: 'City',
  cityPlaceholder: 'Enter your city',
  zip: 'Postal Code',
  zipPlaceholder: 'Enter your postal code',
  country: 'Country',
  countryPlaceholder: 'Enter your country',
  phone: 'Phone Number',
  email: 'Email',
  emailPlaceholder: 'Enter your email',
  paymentMethod: 'Payment Method',
  bankTransferShort: 'Bank Transfer *',
  paymentMethodNote:
    '* After finalizing your service request, check your inbox for a summary of your project and our bank transfer details.',
  anythingToAdd: 'Anything to add?',
  orderNotesPlaceholder: 'Add any notes for our team (optional)',
  termsOfUse: "I have read and agree to the website's Terms of Use.",
  refundPolicy: 'I have read and agree to the Refund Policy.',
  submitting: 'Submitting...',
  submitOrder: 'Submit Order',
};

const formatPrice = (value: number) =>
  `€${value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

export const CheckoutForm = () => {
  const router = useRouter();
  const [recaptchaKey, setRecaptchaKey] = useState(0);

  const user = useAuthStore((s) => s.user);
  const isInitialized = useAuthStore((s) => s.isInitialized);
  const fetchUser = useAuthStore((s) => s.fetchUser);

  const items = useCartStore((state) => state.items);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);
  const clearCart = useCartStore((state) => state.clearCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const total = getTotalPrice();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutFormSchema>({
    resolver: zodResolver(createCheckoutFormSchema()),
    defaultValues,
  });

  useEffect(() => {
    if (!isInitialized) {
      fetchUser();
    }
  }, [isInitialized, fetchUser]);

  useEffect(() => {
    if (!user || !isInitialized) return;

    reset({
      ...defaultValues,
      firstName: user.firstName ?? '',
      lastName: user.lastName ?? '',
      email: user.email ?? '',
      phone: (user.phone as string) ?? '',
    });
  }, [user, isInitialized, reset]);

  const handleRecaptchaChange = (token: string | null) => {
    if (ENABLE_RECAPTCHA) {
      setValue('recaptcha', token ?? '', { shouldValidate: true });
      return;
    }

    setValue('recaptcha', 'disabled', { shouldValidate: false });
  };

  const handleQuantityStep = (id: string, quantity: number, delta: number) => {
    updateQuantity(id, quantity + delta);
  };

  const onSubmit = async (data: CheckoutFormSchema) => {
    try {
      const result = await createOrder({
        billing: {
          firstName: data.firstName,
          lastName: data.lastName,
          address1: data.address1,
          address2: data.address2,
          city: data.city,
          country: data.country,
          zip: data.zip,
        },
        contact: {
          email: data.email,
          phone: data.phone ?? '',
        },
        orderNotes: data.orderNotes,
        items,
        total,
        recaptcha: data.recaptcha,
        userId: user?.id,
      });

      const orderNumber = (result as { doc?: { orderNumber?: string } })?.doc?.orderNumber ?? '';
      if (typeof sessionStorage !== 'undefined') {
        sessionStorage.setItem('lastOrder', JSON.stringify({ orderNumber, items, total }));
      }

      clearCart();
      setRecaptchaKey((k) => k + 1);
      await fetchUser();
      router.push('/thank-you');
    } catch (err) {
      console.error(err);
      setRecaptchaKey((k) => k + 1);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className="_container">
        <div className={styles.shell}>
          <header className={styles.header}>
            <h1>{copy.checkoutTitle}</h1>
          </header>

          <div className={styles.columns}>
            <section className={styles.cartPanel} aria-labelledby="checkout-cart-title">
              <div className={styles.cartPanelInner}>
                <h2 id="checkout-cart-title">{copy.inYourCart}</h2>

                <div className={styles.cartTableDesktop}>
                  <div className={`${styles.cartRow} ${styles.cartHeadRow}`}>
                    <div className={`${styles.cartCell} ${styles.nameCell}`}>
                      {copy.serviceName}
                    </div>
                    <div className={styles.cartCell}>
                      {copy.totalPriceLabel}
                    </div>
                    <div className={`${styles.cartCell} ${styles.qtyCell}`}>
                      {copy.quantityLabel}
                    </div>
                    <div className={styles.cartCell}>
                      {copy.subtotalLabel}
                    </div>
                  </div>

                  {items.map((item) => (
                    <div key={item.id} className={styles.cartRow}>
                      <div className={`${styles.cartCell} ${styles.nameCell}`}>{item.title}</div>
                      <div className={styles.cartCell}>{formatPrice(item.price)}</div>
                      <div className={`${styles.cartCell} ${styles.qtyCell}`}>
                        <div className={styles.quantityControl}>
                          <button
                            type="button"
                            onClick={() => handleQuantityStep(item.id, item.quantity, -1)}
                            aria-label={copy.decreaseQuantity}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M4 8H12"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                          <span>{String(item.quantity).padStart(2, '0')}</span>
                          <button
                            type="button"
                            onClick={() => handleQuantityStep(item.id, item.quantity, 1)}
                            aria-label={copy.increaseQuantity}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M4 8H12"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M8 12V4"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className={styles.cartCell}>
                        {formatPrice(item.price * item.quantity)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.cartListMobile}>
                  {items.map((item) => (
                    <article key={item.id} className={styles.cartItemCard}>
                      <div className={styles.cartItemCardHeader}>{item.title}</div>
                      <div className={styles.cartItemCardRow}>
                        <span>{copy.price}</span>
                        <strong>{formatPrice(item.price)}</strong>
                      </div>
                      <div className={styles.cartItemCardRow}>
                        <span>{copy.subtotal}</span>
                        <strong>{formatPrice(item.price * item.quantity)}</strong>
                      </div>
                      <div className={styles.cartItemCardRow}>
                        <span>{copy.quantityLabel}</span>
                        <div className={styles.quantityControl}>
                          <button
                            type="button"
                            onClick={() => handleQuantityStep(item.id, item.quantity, -1)}
                            aria-label={copy.decreaseQuantity}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M4 8H12"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                          <span>{String(item.quantity).padStart(2, '0')}</span>
                          <button
                            type="button"
                            onClick={() => handleQuantityStep(item.id, item.quantity, 1)}
                            aria-label={copy.increaseQuantity}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M4 8H12"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M8 12V4"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <p className={styles.cartTotal}>
                  {copy.total}: {formatPrice(total)}
                </p>
              </div>
            </section>

            <section className={styles.formPanel} aria-labelledby="checkout-billing-title">
              <div className={styles.panelSection}>
                <h2 id="checkout-billing-title">
                  {copy.billingDetails}
                </h2>

                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label htmlFor="firstName">
                      {copy.firstName}
                      <span className={styles.required}>*</span>
                    </label>
                    <input
                      id="firstName"
                      placeholder={copy.firstNamePlaceholder}
                      {...register('firstName')}
                      className={errors.firstName ? styles.errorInput : ''}
                    />
                    {errors.firstName && (
                      <span className={styles.error}>{errors.firstName.message}</span>
                    )}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="lastName">
                      {copy.lastName}
                      <span className={styles.required}>*</span>
                    </label>
                    <input
                      id="lastName"
                      placeholder={copy.lastNamePlaceholder}
                      {...register('lastName')}
                      className={errors.lastName ? styles.errorInput : ''}
                    />
                    {errors.lastName && (
                      <span className={styles.error}>{errors.lastName.message}</span>
                    )}
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullSpan}`}>
                    <label htmlFor="address1">
                      {copy.address1}
                      <span className={styles.required}>*</span>
                    </label>
                    <input
                      id="address1"
                      placeholder={copy.address1Placeholder}
                      {...register('address1')}
                      className={errors.address1 ? styles.errorInput : ''}
                    />
                    {errors.address1 && (
                      <span className={styles.error}>{errors.address1.message}</span>
                    )}
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullSpan}`}>
                    <label htmlFor="address2">
                      {copy.address2}
                      <span className={styles.optional}>
                        {copy.optional}
                      </span>
                    </label>
                    <input
                      id="address2"
                      placeholder={copy.address2Placeholder}
                      {...register('address2')}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="city">
                      {copy.city}
                      <span className={styles.required}>*</span>
                    </label>
                    <input
                      id="city"
                      placeholder={copy.cityPlaceholder}
                      {...register('city')}
                      className={errors.city ? styles.errorInput : ''}
                    />
                    {errors.city && <span className={styles.error}>{errors.city.message}</span>}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="zip">
                      {copy.zip}
                      <span className={styles.required}>*</span>
                    </label>
                    <input
                      id="zip"
                      placeholder={copy.zipPlaceholder}
                      {...register('zip')}
                      className={errors.zip ? styles.errorInput : ''}
                    />
                    {errors.zip && <span className={styles.error}>{errors.zip.message}</span>}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="country">
                      {copy.country}
                      <span className={styles.required}>*</span>
                    </label>
                    <Controller
                      name="country"
                      control={control}
                      render={({ field }) => (
                        <Select
                          inputId="country"
                          options={countries}
                          placeholder={copy.countryPlaceholder}
                          isSearchable
                          className={styles.select}
                          classNamePrefix="checkout-country"
                          styles={{
                            control: (base, state) => ({
                              ...base,
                              minHeight: 50,
                              borderRadius: 0,
                              boxShadow: 'none',
                              backgroundColor: 'rgba(255,255,255,0.10)',
                              borderColor: errors.country
                                ? 'rgba(255, 62, 71, 0.6)'
                                : state.isFocused
                                  ? 'rgba(255,255,255,0.55)'
                                  : 'rgba(255,255,255,0.30)',
                              '&:hover': {
                                borderColor: errors.country
                                  ? 'rgba(255, 62, 71, 0.6)'
                                  : 'rgba(255,255,255,0.45)',
                              },
                            }),
                            valueContainer: (base) => ({
                              ...base,
                              padding: '0 16px',
                            }),
                            placeholder: (base) => ({
                              ...base,
                              color: 'rgba(255,255,255,0.3)',
                              fontSize: 18,
                              fontWeight: 400,
                              letterSpacing: '-0.5px',
                            }),
                            singleValue: (base) => ({
                              ...base,
                              color: '#fff',
                              fontSize: 18,
                              fontWeight: 400,
                              letterSpacing: '-0.5px',
                            }),
                            input: (base) => ({
                              ...base,
                              color: '#fff',
                              fontSize: 18,
                              letterSpacing: '-0.5px',
                            }),
                            menu: (base) => ({
                              ...base,
                              marginTop: 6,
                              borderRadius: 0,
                              backgroundColor: '#000829',
                              border: '1px solid rgba(255,255,255,0.2)',
                              overflow: 'hidden',
                              zIndex: 20,
                            }),
                            option: (base, state) => ({
                              ...base,
                              backgroundColor: state.isSelected
                                ? 'rgba(255,255,255,0.14)'
                                : state.isFocused
                                  ? 'rgba(255,255,255,0.08)'
                                  : 'transparent',
                              color: '#fff',
                              fontSize: 16,
                              letterSpacing: '-0.25px',
                              cursor: 'pointer',
                            }),
                            indicatorSeparator: () => ({ display: 'none' }),
                            dropdownIndicator: (base) => ({
                              ...base,
                              color: 'rgba(255,255,255,0.6)',
                              paddingRight: 12,
                              '&:hover': { color: '#fff' },
                            }),
                          }}
                          value={
                            countries.find(
                              (option) =>
                                option.value.toLowerCase() === (field.value || '').toLowerCase()
                            ) || null
                          }
                          onChange={(selectedOption) =>
                            field.onChange(selectedOption ? selectedOption.value : '')
                          }
                        />
                      )}
                    />
                    {errors.country && (
                      <span className={styles.error}>{errors.country.message}</span>
                    )}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phone">
                      {copy.phone}
                      <span className={styles.optional}>
                        {copy.optional}
                      </span>
                    </label>
                    <Controller
                      name="phone"
                      control={control}
                      render={({ field }) => (
                        <PhoneInput
                          country="gb"
                          value={field.value}
                          onChange={(value) => field.onChange(value)}
                          excludeCountries={[...new Set(excludedCountries)]}
                          inputProps={{
                            id: 'phone',
                            name: 'phone',
                          }}
                          containerClass={styles.phoneInputContainer}
                          inputClass={
                            errors.phone
                              ? `${styles.phoneInput} ${styles.errorInput}`
                              : styles.phoneInput
                          }
                          enableSearch
                          preferredCountries={['gb']}
                        />
                      )}
                    />
                    {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullSpan}`}>
                    <label htmlFor="email">
                      {copy.email}
                      <span className={styles.required}>*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder={copy.emailPlaceholder}
                      {...register('email')}
                      className={errors.email ? styles.errorInput : ''}
                    />
                    {errors.email && <span className={styles.error}>{errors.email.message}</span>}
                  </div>
                </div>
              </div>

              <div className={styles.divider} />

              {/**<div className={styles.panelSection}>
              <h2>{t("currencyTitle", { fallback: "Your Currency" })}</h2>
              <div className={styles.staticField}>EUR</div>
            </div> */}

              <div className={styles.panelSection}>
                <h2>{copy.paymentMethod}</h2>
                <div className={styles.staticField}>
                  {copy.bankTransferShort}
                </div>
                <p className={styles.helperText}>
                  {copy.paymentMethodNote}
                </p>
              </div>

              <div className={styles.panelSection}>
                <h2>{copy.anythingToAdd}</h2>
                <div className={`${styles.formGroup} ${styles.fullSpan}`}>
                  <textarea
                    id="orderNotes"
                    rows={4}
                    placeholder={copy.orderNotesPlaceholder}
                    {...register('orderNotes')}
                  />
                </div>
              </div>

              <div className={styles.panelSection}>
                <div className={styles.checkboxBlock}>
                  <label className={styles.checkboxLabel}>
                    <input type="checkbox" {...register('termsAccepted')} />
                    <span>
                      {copy.termsOfUse}
                    </span>
                  </label>
                  {errors.termsAccepted && (
                    <span className={styles.error}>{errors.termsAccepted.message}</span>
                  )}
                </div>

                <div className={styles.checkboxBlock}>
                  <label className={styles.checkboxLabel}>
                    <input type="checkbox" {...register('refundPolicyAccepted')} />
                    <span>
                      {copy.refundPolicy}
                    </span>
                  </label>
                  {errors.refundPolicyAccepted && (
                    <span className={styles.error}>{errors.refundPolicyAccepted.message}</span>
                  )}
                </div>

                {ENABLE_RECAPTCHA && (
                  <div className={styles.captchaWrap}>
                    <ReCAPTCHA
                      key={recaptchaKey}
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''}
                      onChange={handleRecaptchaChange}
                    />
                    {errors.recaptcha && (
                      <span className={styles.error}>{errors.recaptcha.message}</span>
                    )}
                  </div>
                )}

                <div className={styles.submitRow}>
                  <Button type="submit" variant="white" disabled={isSubmitting}>
                    {isSubmitting ? copy.submitting : copy.submitOrder}
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </form>
  );
};
