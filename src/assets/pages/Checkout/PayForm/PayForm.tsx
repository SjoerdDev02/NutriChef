import styles from './PayForm.module.css';
import { useNavigate } from 'react-router';
import { useForm, FieldValues } from 'react-hook-form';

const PayForm = () => {
    const {
        register,
        formState: { errors, isSubmitting },
        handleSubmit,
        reset,
    } = useForm();

    const navigate = useNavigate();

    async function onSubmit(data: FieldValues) {
        console.log(data);
        reset();
        navigate('/', { state: true });
    }

    return (
        <section className={styles.checkoutFormContainer}>
            <h1>Payment</h1>
            <form role="form" onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.formFields}>
                    <div className={styles.formGroup}>
                        {errors.name && <p>{String(errors.name.message)}</p>}
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="John"
                            {...register("name", {
                                required: "Name is required",
                            })}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        {errors.email && <p>{String(errors.email.message)}</p>}
                        <label htmlFor="email">Email Adress</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="name@email.com"
                            {...register("email", {
                                required: "Email is required",
                            })}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        {errors.bank && <p>{String(errors.bank.message)}</p>}
                        <label htmlFor='bank'>Bank</label>
                        <select
                            id="bank"
                            role="listbox"
                            aria-label="Bank"
                            {...register("bank", {
                                required: "Bank option is required",
                            })}>
                            <option value="" disabled>Selecteer een Bank</option>
                            <option value="ing">Ing</option>
                            <option value="rabobank">Rabobank</option>
                            <option value="abnamro">ABN Amro</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        {errors.delivery && <p>{String(errors.delivery.message)}</p>}
                        <label htmlFor='delivery'>Delivery Options</label>
                        <select
                            id="delivery"
                            role="listbox"
                            aria-label="Delivery Options"
                            {...register("delivery", {
                                required: "Delivery option is required",
                            })}>
                            <option value="" disabled>Selecteer a delivery option</option>
                            <option value="delivery">Delivery</option>
                            <option value="pickup">Pick up at the store</option>
                        </select>
                    </div>
                </div>
                <button className={styles.btn} disabled={isSubmitting}>Pay</button>
            </form>
        </section>
    );
}

export default PayForm;