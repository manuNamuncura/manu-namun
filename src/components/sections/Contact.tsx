import { Mail, Linkedin, Github, Send, CheckCircle } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export const Contact = () => {

    const [state, handleSubmit] = useForm("mkoooyer");

    if (state.succeeded) {
        return (
            <section id='contacto' className='py-24 text-center bg-white dark:bg-black transition-colors duration-300'>
                <div className='max-w-md mx-auto p-10 border border-black dark:border-white rounded-2xl'>
                    <CheckCircle className='w-16 h-16 mx-auto mb-6 text-green-500' />
                    <h2 className='text-3xl font-bold mb-4 dark:text-white text-black'>¡Mensaje Enviado!</h2>
                    <p className='text-gray-600 dark:text-gray-400'>Gracias por contactarte, Manuel te responderá pronto</p>
                    <button
                        onClick={() => window.location.reload()}
                        className='mt-8 text-sm underline dark:text-white'
                    >
                        Volver a Contacto
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section id="contacto" className="py-24 bg-white dark:bg-black transition-colors duration-300">
            <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
                    Contacto
                </h2>
                <div className="h-1 w-20 bg-black dark:bg-white"></div>
                <p className="mt-6 text-gray-600 dark:text-gray-400">
                    ¿Tienes una propuesta o quieres charlar sobre tecnología? ¡Escríbeme!
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Formulario */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nombre Completo</label>
                        <input
                            id="full-name"
                            type="text"
                            name="name"
                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all dark:text-white"
                            placeholder="Tu nombre"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all dark:text-white"
                            placeholder="tu@email.com"
                            required
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Mensaje</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all dark:text-white"
                            placeholder="¿Cómo puedo ayudarte?"
                            required
                        />
                        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
                    </div>

                    <button
                        type="submit"
                        disabled={state.submitting}
                        className="flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-bold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                    >
                        {state.submitting ? 'Enviando...' : 'Enviar Mensaje'} <Send size={18} />
                    </button>
                </form>

                {/* Enlaces y Datos */}
                <div className="flex flex-col justify-between space-y-8 lg:pl-12">
                    <div className="space-y-6">
                        <a
                            href="mailto:manu.namun94@gmail.com"
                            className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-900 hover:border-black dark:hover:border-white transition-all group"
                        >
                            <div className="p-3 bg-gray-100 dark:bg-gray-900 rounded-lg group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-colors">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-widest">Email</p>
                                <p className="text-black dark:text-white font-medium">manu.namun94@gmail.com</p>
                            </div>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/manuel-namuncur%C3%A1-a9591b21b/"
                            target="_blank"
                            className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-900 hover:border-black dark:hover:border-white transition-all group"
                        >
                            <div className="p-3 bg-gray-100 dark:bg-gray-900 rounded-lg group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-colors">
                                <Linkedin size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-widest">LinkedIn</p>
                                <p className="text-black dark:text-white font-medium">Manuel Namuncurá</p>
                            </div>
                        </a>

                        <a
                            href="https://github.com/manuNamuncura"
                            target="_blank"
                            className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-900 hover:border-black dark:hover:border-white transition-all group"
                        >
                            <div className="p-3 bg-gray-100 dark:bg-gray-900 rounded-lg group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-colors">
                                <Github size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-widest">GitHub</p>
                                <p className="text-black dark:text-white font-medium">@manuNamuncura</p>
                            </div>
                        </a>
                    </div>

                    <div className="p-6 bg-gray-50 dark:bg-gray-950 rounded-2xl border border-dashed border-gray-300 dark:border-gray-800">
                        <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                            "Analista en Sistemas enfocado en soluciones eficientes. Disponible para nuevos desafíos y colaboraciones."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};