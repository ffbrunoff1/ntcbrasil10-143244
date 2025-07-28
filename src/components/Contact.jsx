import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Loader2,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    try {
      const response = await fetch('/.netlify/functions/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || 'Ocorreu uma falha ao enviar a mensagem.'
        );
      }

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError(error.message);
      setTimeout(() => setSubmitError(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-light-bg">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text">
            Entre em Contato
          </h2>
          <div className="mt-4 w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600">
            Pronto para começar seu próximo projeto? Entre em contato conosco
            para transformar seu projeto em realidade!
          </p>
        </motion.div>

        <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 bg-secondary p-8 md:p-12 rounded-2xl shadow-card">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-dark-text mb-6">
              Fale Conosco Diretamente
            </h3>
            <div className="space-y-6">
              <a href="tel:+5544991040774" className="flex items-center group">
                <Phone className="h-8 w-8 text-primary mr-4" />
                <div>
                  <p className="font-semibold text-lg text-dark-text group-hover:text-primary transition-colors">
                    Telefone
                  </p>
                  <p className="text-gray-600">+55 44 99104-0774</p>
                </div>
              </a>
              <a
                href="mailto:ffbrunoff@yahoo.com.br"
                className="flex items-center group"
              >
                <Mail className="h-8 w-8 text-primary mr-4" />
                <div>
                  <p className="font-semibold text-lg text-dark-text group-hover:text-primary transition-colors">
                    E-mail
                  </p>
                  <p className="text-gray-600">ffbrunoff@yahoo.com.br</p>
                </div>
              </a>
              <div className="flex items-center">
                <MapPin className="h-8 w-8 text-primary mr-4" />
                <div>
                  <p className="font-semibold text-lg text-dark-text">
                    Endereço
                  </p>
                  <p className="text-gray-600">
                    Padre Lebret 801, G05 Bloco 03
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mensagem
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center bg-primary text-secondary px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-accent transition-all duration-300 disabled:bg-gray-400"
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin h-6 w-6" />
                  ) : (
                    'Enviar Mensagem'
                  )}
                </button>
              </div>
              {submitSuccess && (
                <div className="flex items-center p-4 bg-green-100 text-green-700 rounded-lg">
                  <CheckCircle className="h-5 w-5 mr-3" />
                  <p>
                    Mensagem enviada com sucesso! Entraremos em contato em
                    breve.
                  </p>
                </div>
              )}
              {submitError && (
                <div className="flex items-center p-4 bg-red-100 text-red-700 rounded-lg">
                  <AlertTriangle className="h-5 w-5 mr-3" />
                  <p>Erro: {submitError}</p>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
