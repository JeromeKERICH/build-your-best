import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFileAlt, FaComments, FaStar, FaUpload } from 'react-icons/fa';
import { BsCheck2Circle } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function CvInterviewPrep() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleBookNow = (serviceName) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };
   const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F5F9FF] min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="assets/CV.jpg"
            alt="CV Review and Interview Preparation"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-[#00337C] mix-blend-multiply opacity-60"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#B89CA5]">
                CV Review & Interview Prep
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-8">
              Land your dream job with a standout CV and confident interview skills
            </p>
            <div className="flex justify-center gap-4">
              
              
              <Link
                to="/coaching"
                className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-[#00337C] rounded-lg font-bold transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get Noticed and Get Hired
              </h2>
              <p className="text-lg text-gray-600 mb-6">
              Your CV is your ticket in. It’s the first thing an employer sees, and most times, it’s what decides whether you get called for that interview or not.
At Build Your Best Self, we don’t just “fix” CVs. 

              </p>
              <p className="text-lg text-gray-600 mb-8">
              We help you tell your story in a way that shows your skills, your value, and your potential. We make sure your CV works for you, not against you.
We have packages to fit every stage of your career, whether you’re just starting out, growing, or already leading.
              </p>
              <div className="flex items-center">
                <FaFileAlt className="text-3xl text-[#00337C] mr-4" />
                <span className="text-lg font-medium text-gray-800">
                  Professional CV optimization and mock interview sessions
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#F5F9FF] p-8 rounded-2xl shadow-lg border border-[#00337C]/20"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaStar className="mr-3 text-[#00337C]" />
                What You'll Receive
              </h3>
              <ul className="space-y-4">
                {[
                  "Professional CV/Resume optimization for ATS systems",
                  "Customized cover letter review and writing",
                  "Mock interview sessions with detailed feedback",
                  "Industry-specific interview question preparation",
                  "Salary negotiation strategies and techniques",
                  "Follow-up email templates and guidance"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <BsCheck2Circle className="text-[#00337C] mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-5 bg-[#F5F9FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Service Packages
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00337C] to-[#B76E79] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the level of support that matches your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaFileAlt className="text-4xl mb-4 text-[#00337C]" />,
                title: "Starter Package (Entry-Level)",
                price: "$25",
                features: [
                  "A CV that looks professional, clean, and ready for employers",
                  "Highlighting of your skills, school achievements, volunteer work, or internships",
                  "A ready-to-use Cover Letter template",
                  "Basic content suggestions",
                  "Guidance on how to position yourself for your first job or internship",
                    "Tips for online applications and ATS optimization"
                ],
                popular: false
              },
              {
                
                title: "Growth Package (Mid-Level)  ",
                price: "$45",
                features: [
                  "A stronger CV that focuses on your results and achievements, not just job duties.",
                  "A Cover Letter written and tailored for your role or industry.",
                  "Interview Preparation Guide (questions, answers, and tips).",
                  "One Mock Interview session (30 minutes, with feedback).",
                  "Advice on how to change industries or roles without losing your edge",
                  "Tips for networking and leveraging LinkedIn"
              
                ],
                popular: true
              },
              {
                icon: <FaComments className="text-4xl mb-4 text-[#00337C]" />,
                title: "Executive Package",
                price: "$90",
                features: [
                  "An executive-level CV that clearly shows leadership, results, and impact",
                  "A strong Cover Letter tailored to senior or leadership positions",
                  "Two Mock Interview sessions (technical and panel interviews)",
                  "CV + Cover Letter tailored for 2 job roles you choose",
                  "A short Career Branding Guide to help you prepare for top roles",
                  "Tips for salary negotiations"
                ],
                popular: false
              },
                {
                
                title: "Interview Preparation Session",
                price: "$45 1 hour session",
                features: [
                    "Practice answering common and tough interview questions",
                    "Use the STAR method to structure strong, clear responses",
                    "Build confidence in telling your career story",
                    "Improve your body language, tone, and presence",
                    "Learn strategies for virtual interviews, panel interviews, and high-pressure questions."
                ],
                popular: false
                }, 
                {
                
                title: "LinkedIn Revamp",
                price: "$60",
                features: [
                    "A rewritten headline and summary that make you stand out.",
                    "Skills and keywords that help recruiters find you",
                    "Updated job descriptions that highlight your achievements",
                    "Tips to grow your network and attract opportunities.",
                    "Suggestions for skills, endorsements, and recommendations",
                ],
                }



            ].map((packageItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#00337C]/10"
              >
                {packageItem.popular && (
                  <div className="bg-[#00337C] text-white px-4 py-1 text-sm font-medium rounded-full mb-4 inline-block">
                    Most Popular
                  </div>
                )}
                {packageItem.icon}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{packageItem.title}</h3>
                <p className="text-2xl font-bold text-[#B76E79] mb-6">{packageItem.price}</p>
                <ul className="space-y-3 mb-6">
                  {packageItem.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <BsCheck2Circle className="text-[#00337C] mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
             
                <button
                    onClick={() => navigate('/resume-cart', { 
                        state: { 
                        service: {
                            title: packageItem.title,
                            price: parseFloat(packageItem.price.replace('$', '')),
                            requiresCV: true, // Set based on service type
                            requiresLinkedIn: packageItem.title.includes('LinkedIn')
                        }
                        } 
                    })}
                    className="w-full bg-[#00337C] hover:bg-[#1E4B9E] text-white py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
                    >
                    <FaUpload className="text-sm" />
                    Book Now
                    </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00337C] to-[#B76E79] mx-auto mb-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Upload Your CV",
                description: "Submit your current CV through our secure portal"
              },
              {
                step: "02",
                title: "Choose Package",
                description: "Select the level of service that fits your needs"
              },
              {
                step: "03",
                title: "Expert Review",
                description: "Our career experts analyze and enhance your materials"
              },
              {
                step: "04",
                title: "Receive Feedback",
                description: "Get your optimized CV and personalized feedback"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#00337C] to-[#1E4B9E] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#F5F9FF] to-[#FFF0F0] rounded-2xl p-8 md:p-12 shadow-sm border border-[#00337C]/20"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Job Search?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Upload your CV today and take the first step toward landing your dream job.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button
                onClick={() => handleBookNow('CV Review Service')}
                className="px-6 py-3 text-sm bg-gradient-to-r from-[#00337C] to-[#1E4B9E] hover:from-[#1E4B9E] hover:to-[#00337C] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaUpload />
                Upload Your CV Now
              </button>
              <Link
                to="/contact"
                className="px-6 py-3 text-sm border-2 border-[#00337C] text-[#00337C] hover:bg-[#00337C]/10 rounded-xl font-bold text-lg transition-all duration-300"
              >
                Have Questions?
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}