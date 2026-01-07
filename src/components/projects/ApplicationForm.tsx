import { useState } from 'react';
import type { FormEvent } from 'react';
import emailjs from '@emailjs/browser';

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'blue';
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit';
    disabled?: boolean;
}

const Button = ({ variant = 'primary', children, className = '', onClick, type = 'button', disabled = false }: ButtonProps) => {
    const base = "px-6 py-3 font-semibold uppercase tracking-wider text-sm transition-all duration-200 flex items-center justify-center gap-2";
    const variants = {
        primary: "bg-[#020617] text-white hover:bg-[#111827] disabled:opacity-50 disabled:cursor-not-allowed",
        secondary: "bg-transparent border-2 border-[#020617] text-[#020617] hover:bg-[#020617] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed",
        blue: "bg-[#2F80FF] text-white hover:bg-[#2563EB] disabled:opacity-50 disabled:cursor-not-allowed",
    };

    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={`${base} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
};

interface FormData {
    projectName: string;
    website: string;
    category: string;
    stage: string;
    description: string;
}

export const ApplicationForm = () => {
    const [formData, setFormData] = useState<FormData>({
        projectName: '',
        website: '',
        category: 'DeFi',
        stage: '',
        description: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.projectName || !formData.website || !formData.stage || !formData.description) {
            setSubmitStatus('error');
            setErrorMessage('Please fill in all required fields');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        try {
            const templateParams = {
                project_name: formData.projectName,
                website: formData.website,
                category: formData.category,
                stage: formData.stage,
                description: formData.description,
            };

            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setSubmitStatus('success');
            setFormData({
                projectName: '',
                website: '',
                category: 'DeFi',
                stage: '',
                description: ''
            });

            setTimeout(() => {
                setSubmitStatus('idle');
            }, 5000);
        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitStatus('error');
            setErrorMessage('Failed to submit application. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-24 px-6 bg-white border-t">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-12">Apply for Incubation</h2>
                <form onSubmit={handleSubmit}>
                    <div className="bg-[#F5F5F7] p-10 rounded-2xl border">
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-widest text-gray-500">
                                    Project Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                    placeholder="e.g. Athena Protocol"
                                    value={formData.projectName}
                                    onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-widest text-gray-500">
                                    Website <span className="text-red-500">*</span>
                                </label>
                                <input
                                    className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                    placeholder="https://..."
                                    type="url"
                                    value={formData.website}
                                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Category</label>
                                <select
                                    className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                >
                                    <option>DeFi</option>
                                    <option>AI</option>
                                    <option>Consumer</option>
                                    <option>Infra</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-widest text-gray-500">
                                    Stage <span className="text-red-500">*</span>
                                </label>
                                <div className="flex gap-6 pt-2">
                                    <label className="flex items-center gap-2 font-bold">
                                        <input
                                            type="radio"
                                            name="stage"
                                            value="Pre-launch"
                                            checked={formData.stage === 'Pre-launch'}
                                            onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                                            required
                                        />
                                        Pre-launch
                                    </label>
                                    <label className="flex items-center gap-2 font-bold">
                                        <input
                                            type="radio"
                                            name="stage"
                                            value="Launched"
                                            checked={formData.stage === 'Launched'}
                                            onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                                        />
                                        Launched
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2 mb-8">
                            <label className="text-sm font-bold uppercase tracking-widest text-gray-500">
                                Description <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                className="w-full p-4 border rounded-lg h-32 outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Tell us about what you are building..."
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                required
                            />
                        </div>

                        {submitStatus === 'success' && (
                            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                                Application submitted successfully! We'll get back to you soon.
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                                {errorMessage}
                            </div>
                        )}

                        <Button
                            type="submit"
                            className="w-full py-5 text-lg"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Application'}
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
};
