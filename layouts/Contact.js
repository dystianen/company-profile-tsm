"use client";

import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;
  const { contact_form_action } = config.params;

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""}
    >
      <section className="section">
        <div className="container">
          {markdownify(title, "h1", "text-center font-normal")}
          <div className="section row pb-0">
            <div className="col-12 md:col-6 lg:col-5 flex flex-col gap-8">
              <div>
                <h4>Heade Office</h4>
                <p>
                  Pakuwon Tower 26th floor Unit J, Casablanca Raya Street No.
                  88, South Jakarta, Indonesia <br />
                  +62 21 566 3704
                </p>
              </div>

              <div>
                <h4>Development Center</h4>
                <p>
                  Komplek Aldiron Hero Block C No. 9-10, Daan Mogot Street Kav.
                  119, West Jakarta, Indonesia <br />
                  info@indocyber.co.id
                </p>
              </div>

              <div>
                <h4>Representative Office</h4>
                <p>
                  Gedung Sampoerna Strategic Square South Tower Lt. 30 Jl.
                  Jenderal Sudirman No.45-46, RT.3/RW.4, Karet Semanggi,
                  Kecamatan Setiabudi, Kota Jakarta Selatan, DKI Jakarta
                </p>
              </div>
            </div>
            <div className="col-12 md:col-6 lg:col-7 flex flex-col gap-4">
              <div>
                <h4>What can we do for you?</h4>
                <p>
                  Please feel free to tell your problem, we will contact you
                  immediately
                </p>
              </div>
              <form
                className="contact-form"
                method="POST"
                action={contact_form_action}
              >
                <div className="mb-3">
                  <input
                    className="form-input w-full rounded"
                    name="name"
                    type="text"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-input w-full rounded"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-input w-full rounded"
                    name="phone_number"
                    type="number"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-input w-full rounded"
                    name="company_name"
                    placeholder="Company Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-textarea w-full rounded-md"
                    rows="4"
                    placeholder="Your message"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </GoogleReCaptchaProvider>
  );
};

export default Contact;
