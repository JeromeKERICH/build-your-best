import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import CoachingCheckout from './Cart2';
import { Link } from 'react-router-dom';


export default function CoachingPackages() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [selectedPackage, setSelectedPackage] = useState(null);
    const [showCheckout, setShowCheckout] = useState(false);

    const packages = [
        {
            name: "Clarity Boost",
            price: "$35",
            description: "A single powerful session to gain immediate clarity on your most pressing challenge.",
            features: [
                "60-minute 1:1 session",
                "Customized action plan",
                "Email follow-up",
                "Perfect for quick breakthroughs"
            ],
            popular: false,
            link: "/book/clarity-boost",
            quantity: 1,
            type: "coaching"
        },
        {
            name: "Transformation Journey",
            price: "$165",
            description: "Deep six-session container for holistic personal transformation.",
            features: [
                "Six 60-minute sessions",
                "Comprehensive assessment",
                "Weekly check-ins",
                "Custom resources",
                "Priority email access"
            ],
            popular: true,
            quantity: 1,
            type: "coaching"
        },
        {
            name: "Breakthrough Bundle",
            price: "$90",
            description: "Three sessions to create momentum and sustainable change in one key area.",
            features: [
                "Three 60-minute sessions",
                "Personalized growth plan",
                "Between-session support",
                "Accountability structure"
            ],
            popular: false,
            link: "/book/breakthrough-bundle",
            quantity: 1,
            type: "coaching"
        },
        
       
    ];

    const handleBookNow = (pkg) => {
        if (!pkg.comingSoon) {
            setSelectedPackage({
                ...pkg,
                price: parseFloat(pkg.price.replace('$', '').replace('/session', ''))
            });
            setShowCheckout(true);
        }
    };

    if (showCheckout && selectedPackage) {
        return <CoachingCheckout selectedProduct={selectedPackage} />;
    }

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#F5F9FF] to-[#FFF0F0]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00337C] to-[#B76E79]">
                            Coaching Packages
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Choose the support that matches where you are and where you want to go
                    </motion.p>
                </div>
            </section>

            {/* Packages Grid */}
            <section className="relative py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {packages.map((pkg, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${pkg.popular ? 'ring-2 ring-[#00337C]' : ''}`}
                            >
                                {pkg.popular && (
                                    <div className="absolute top-0 right-0 bg-[#00337C] text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                                        Most Popular
                                    </div>
                                )}
                                {pkg.comingSoon && (
                                    <div className="absolute top-0 right-0 bg-gray-600 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                                        Coming Soon
                                    </div>
                                )}
                                <div className="bg-white p-8 h-full flex flex-col">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                                    <p className="text-[#00337C] text-xl font-medium mb-4">{pkg.price}</p>
                                    <p className="text-gray-600 mb-6">{pkg.description}</p>
                                    <ul className="space-y-3 mb-8 flex-grow">
                                        {pkg.features.map((feature, i) => (
                                            <li key={i} className="flex items-start">
                                                <svg className="flex-shrink-0 mt-1 mr-3 h-5 w-5 text-[#00337C]" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <motion.button
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => handleBookNow(pkg)}
                                        className={`mt-auto w-full text-center px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                                            pkg.comingSoon 
                                                ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                                                : 'bg-gradient-to-r from-[#00337C] to-[#1E4B9E] hover:from-[#1E4B9E] hover:to-[#00337C] text-white shadow-lg'
                                        }`}
                                    >
                                        {pkg.comingSoon ? 'Join Waitlist' : 'Book Now'}
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="relative py-16 bg-gradient-to-br from-[#F5F9FF] to-[#FFF0F0]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Package Comparison</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#00337C] to-[#B76E79] mx-auto"></div>
                    </motion.div>

                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl overflow-hidden shadow-lg">
                            <thead>
                                <tr className="bg-gradient-to-r from-[#00337C] to-[#1E4B9E] text-white">
                                    <th className="py-4 px-6 text-left">Feature</th>
                                    <th className="py-4 px-6 text-center">Clarity Boost</th>
                                    <th className="py-4 px-6 text-center">Breakthrough Bundle</th>
                                    <th className="py-4 px-6 text-center">Transformation</th>
                                    
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {[
                                    { feature: 'Session Length', values: ['60 min', '3x60 min', '6x60 min', ] },
                                    { feature: 'Between-session Support', values: ['Email', 'Email + Texts', 'Priority Email'] },
                                    { feature: 'Custom Resources', values: ['✓', '✓', '✓'] },
                                    { feature: 'Assessment Tools', values: ['-', 'Basic', 'Comprehensive'] },
                                    { feature: 'Accountability', values: ['-', '✓', '✓', ]},
                                ].map((row, rowIndex) => (
                                    <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="py-4 px-6 font-medium text-gray-900">{row.feature}</td>
                                        {row.values.map((value, colIndex) => (
                                            <td key={colIndex} className="py-4 px-6 text-center text-gray-700">{value}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            
        </div>
    );
}

