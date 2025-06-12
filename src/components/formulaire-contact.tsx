import emailjs from "emailjs-com";
import { useState } from "react";
import ButtonContact from "./button-contact";

export default function FormulaireContact() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.currentTarget;

    console.log("email:", form.email.value);
    console.log("message:", form.message.value);

    emailjs
      .sendForm(
        "service_pt6a9sg",
        "template_bptj54f",
        form,
        "6Id3EcCSEbEtEcUJV"
      )
      .then(
        () => {
          setSuccess(true);
          form.reset();
        },
        (error) => {
          setError("Une erreur est survenue. Veuillez réessayer.");
          console.log("EmailJS error:", error);
        }
      )
      .finally(() => setLoading(false));
  }

  console.log("USER_ID: yo", import.meta.env.VITE_EMAILJS_USER_ID);

  return (
    <div className="relative z-10 flex min-h-screen items-center justify-center bg-background px-4 py-24">
      {/* Flou d’arrière-plan */}
      <div className="absolute inset-0 backdrop-blur-sm" />

      {/* Carte principale */}
      <div className="relative z-20 grid w-full max-w-5xl grid-cols-1 overflow-hidden rounded-3xl border border-white/30 bg-white/10 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:shadow-blue-200 md:grid-cols-2">

        {/* Colonne gauche – Informations */}
        <div className="flex flex-col justify-center gap-4 bg-gradient-to-br from-white/10 to-white/5 p-10 text-white">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="text-white/80">Je suis disponible pour discuter de vos projets, collaborations ou idées. N'hésitez surtout pas à me contacter.</p>
          <div className="mt-4 space-y-2 text-white/90">
            <p><span className="font-semibold">📧 Email :</span> benivalerien@gmail.com</p>
            <p><span className="font-semibold">📞 Téléphone :</span> +241 74 13 70 68</p>
            <p><span className="font-semibold">📍 Adresse :</span> Libreville, Gabon</p>
          </div>
        </div>

        {/* Colonne droite – Formulaire */}
        <div className="bg-white/5 p-10">
          {success ? (
            <div className="text-green-400 text-center font-semibold text-lg py-8">
              Merci, votre message a bien été envoyé !
            </div>
          ) : (
            <form className="space-y-6 text-white" onSubmit={handleSubmit}>
              <input type="hidden" name="form_name" value="contact" />
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white/80">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-2 w-full rounded-xl border border-white/30 bg-white/20 px-4 py-3 text-white placeholder-white/60 shadow-inner outline-none backdrop-blur focus:border-blue-400 focus:ring-2 focus:ring-blue-300"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white/80">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  className="mt-2 w-full rounded-xl border border-white/30 bg-white/20 px-4 py-3 text-white placeholder-white/60 shadow-inner outline-none backdrop-blur focus:border-blue-400 focus:ring-2 focus:ring-blue-300"
                  placeholder="Votre message..."
                ></textarea>
              </div>
              {error && (
                <div className="text-red-400 text-center text-sm">{error}</div>
              )}
              <div className="flex justify-center">
                <ButtonContact />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>


  );
}
