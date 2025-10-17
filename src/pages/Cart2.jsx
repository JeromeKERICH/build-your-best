import { useEffect, useState } from 'react';
import { PaystackButton } from 'react-paystack';
import { supabase } from '../library/supabaseClient';

export default function CartPage({ selectedProduct, onBack }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [customerInfo, setCustomerInfo] = useState({
        name: '',
        email: '',
        phone: '',
    });
    const [loading, setLoading] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [error, setError] = useState('');

    const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustomerInfo(prev => ({ ...prev, [name]: value }));
    };

    const handlePaymentSuccess = async (response) => {
        setLoading(true);
        try {
            // Save to Supabase
            const { error } = await supabase
                .from('coaching')
                .insert([{
                    customer_name: customerInfo.name,
                    customer_email: customerInfo.email,
                    customer_phone: customerInfo.phone,
                    product: selectedProduct.name,
                    amount: selectedProduct.price,
                    payment_reference: response.reference,
                    payment_status: 'completed',
                    payment_date: new Date().toISOString()
                }]);

            if (error) throw error;

            // Send WhatsApp confirmation
            const whatsappMessage = `Thank you for your purchase, ${customerInfo.name}!%0A%0A` +
                `Product: ${selectedProduct.name}%0A` +
                `Amount: ₦${selectedProduct.price}%0A` +
                `Reference: ${response.reference}%0A%0A` +
                `We'll be in touch shortly with your purchase details.`;

            window.open(`https://wa.me/211921650576?text=${whatsappMessage}`, '_blank');

            setPaymentSuccess(true);
        } catch (error) {
            console.error('Error saving payment:', error);
            setError('Payment successful but we encountered an issue saving your details. Please contact support.');
        } finally {
            setLoading(false);
        }
    };

    const paystackProps = {
        email: customerInfo.email,
        amount: selectedProduct.price * 100,
        currency: 'USD',
        metadata: {
            custom_fields: [
                {
                    display_name: "Customer Name",
                    variable_name: "customer_name",
                    value: customerInfo.name
                },
                {
                    display_name: "Phone Number",
                    variable_name: "phone",
                    value: customerInfo.phone
                },
                {
                    display_name: "Product",
                    variable_name: "product",
                    value: selectedProduct.name
                }
            ]
        },
        publicKey,
        text: loading ? "Processing Payment..." : "Pay Now",
        onSuccess: handlePaymentSuccess,
        onClose: () => setError("Payment was not completed"),
        disabled: !customerInfo.name || !customerInfo.email || !customerInfo.phone || loading
    };

    if (paymentSuccess) {
        return (
            <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-[#00337C] to-[#1E4B9E] p-6 text-white">
                        <h1 className="text-2xl font-bold">Payment Successful!</h1>
                    </div>
                    <div className="p-8 text-center">
                        <div className="text-green-500 mb-4">
                            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Thank you for your purchase!</h2>
                        <p className="text-gray-600 mb-6">
                            We've sent a confirmation to your WhatsApp and email. Our team will contact you shortly to schedule your sessions.
                        </p>
                        <button
                            onClick={onBack}
                            className="px-6 py-3 bg-[#00337C] text-white rounded-lg font-medium"
                        >
                            Return to Coaching
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#00337C] to-[#1E4B9E] p-6 text-white">
                    <h1 className="text-2xl font-bold">Complete Your Booking</h1>
                    <p className="opacity-90">Secure checkout powered by Paystack</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 p-6">
                    {/* Left Column - Customer Info */}
                    <div className="md:col-span-2 space-y-6">
                        <h2 className="text-lg font-medium text-gray-900">Your Information</h2>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                            <input
                                type="text"
                                name="name"
                                value={customerInfo.name}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#00337C] focus:border-[#00337C]"
                                placeholder="Your full name"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                            <input
                                type="email"
                                name="email"
                                value={customerInfo.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#00337C] focus:border-[#00337C]"
                                placeholder="your@email.com"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number*</label>
                            <input
                                type="tel"
                                name="phone"
                                value={customerInfo.phone}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#00337C] focus:border-[#00337C]"
                                placeholder="+234 812 345 6789"
                                required
                            />
                        </div>

                        {error && (
                            <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm">
                                {error}
                            </div>
                        )}
                    </div>

                    {/* Right Column - Order Summary */}
                    <div className="space-y-6">
                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                            <h2 className="text-lg font-medium mb-4">Order Summary</h2>
                            
                            <div className="flex items-start gap-4 mb-4 pb-4 border-b border-gray-200">
                              
                                <div>
                                    <h3 className="font-medium text-gray-900">{selectedProduct.name}</h3>
                                    <p className="text-sm text-gray-600">{selectedProduct.description}</p>
                                </div>
                            </div>
                            
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span>${selectedProduct.price}</span>
                                </div>
                                
                                <div className="flex justify-between">
                                    <span>Tax</span>
                                    <span>$0.00</span>
                                </div>
                                
                                <div className="flex justify-between font-medium pt-2 border-t border-gray-200">
                                    <span>Total</span>
                                    <span className="text-[#B76E79]">${selectedProduct.price}</span>
                                </div>
                            </div>

                            <div className="mt-6">
                                <PaystackButton 
                                    {...paystackProps}
                                    className={`w-full px-6 py-3 rounded-lg font-medium text-white ${
                                        paystackProps.disabled 
                                            ? 'bg-gray-400 cursor-not-allowed' 
                                            : 'bg-[#00337C] hover:bg-[#1E4B9E]'
                                    }`}
                                />
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    );
}