'use client';
import { useState } from 'react';
import styles from './contactBlock.module.scss';
import { useRouter } from 'next/navigation';
import Spinner from 'react-bootstrap/Spinner';

export default function ContactBlock() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();


  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/sendgrid', {
      body: JSON.stringify({
        fullname: fullname,
        phone: phone,
        email: email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      setError(true);
      return;
    }
    router.push('thanks');
  };
  return (
    <>
      <section
        id="contact"
        className={`${styles.contactBlock} container mx-auto px-2 lg:px-10 py-10 lg:py-20`}
      >
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>Kontakt</h3>
        </div>
        <div className={styles.textWrapper}>
          <p className={styles.text}>
            Możesz też skontaktować się z nami za pomocą formularza, wtedy to my odezwiemy się do Ciebie.
            Z uwagi na dużą ilość zapytań czas odpowiedzi może być nieco opóźniony, jednak nie dłuższy niż 48h roboczych.

          </p>
          <div className={styles.formWrapper}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.box}>
                <div className={`${styles.formBox} name`}>
                  <label htmlFor="name">Imię</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={fullname}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setFullname(e.target.value)
                    }
                  />
                </div>
                <div className={`${styles.formBox} phone`}>
                  <label htmlFor="frm-phone">Telefon</label>
                  <input
                    id="frm-phone"
                    type="text"
                    name="phone"
                    value={phone}
                    required
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setPhone(e.target.value)
                    }
                  />
                </div>
              </div>
              <div className={styles.box}>
                <div className={`${styles.formBox} email`}>
                  <label htmlFor="frm-email">Email</label>
                  <input
                    id="frm-email"
                    type="email"
                    name="email"
                    value={email}
                    required
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setEmail(e.target.value)
                    }
                  />
                </div>
                <div className={styles.buttonBox}>
                  <button className={styles.button} type="submit">
                    Wyślij
                  </button>
                </div>
              </div>
            </form>
            <div className={styles.spinnerWrapper}>
              {loading && (<Spinner className={`${styles.spinner}`} animation="border" />)}
            </div>
            {error && (<p className={`${styles.error}`}>Wystąpił błąd, spróbuj ponownie później</p>)}
          </div>
        </div>
      </section>
    </>
  );
}
