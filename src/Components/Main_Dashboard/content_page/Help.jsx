import React from 'react';

const Help = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the input values
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const message = e.target.elements.message.value;

    // Create the email body
    const emailBody = `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `;

    // Create a mailto link with the email address and body
    const mailtoLink = `mailto:ukkanhary04@gmail.com?subject=Contact Form Submission&body=${encodeURIComponent(emailBody)}`;

    // Open the mail client with the pre-filled email
    window.location.href = mailtoLink;

    // Clear the form inputs
    e.target.reset();
  };

  return (
    <div className="min-h-screen p-6 mt-5 text-gray-900 bg-gray-100">
      <div className="max-w-3xl p-8 mx-auto bg-white rounded-lg shadow-lg">
        <h1 className="mb-6 text-3xl font-bold">Help Center</h1>
        <p className="mb-8 text-lg">
          Welcome to the Help Center. Here you can find answers to frequently asked questions and troubleshoot common issues.
        </p>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-gray-50">
              <h3 className="mb-2 text-xl font-medium">How do I reset my password?</h3>
              <p>
                To reset your password, go to the login page and click on "Forgot Password?" Follow the instructions to reset your password via email.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-gray-50">
              <h3 className="mb-2 text-xl font-medium">How do I update my profile information?</h3>
              <p>
                To update your profile information, log in to your account and navigate to the "Profile" section. Here, you can edit your personal details and save the changes.
              </p>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-gray-50">
              <h3 className="mb-2 text-xl font-medium">Who should I contact for technical support?</h3>
              <p>
                For technical support, please contact our support team at support@example.com. Include as much detail as possible about your issue to receive prompt assistance.
              </p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Contact Us</h2>
          <p className="mb-6">
            If you have any questions that are not covered in the FAQ section, feel free to reach out to us directly.
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                placeholder="Admin"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                placeholder="admin@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                placeholder="Enter your message here"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Send
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Help;
