const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        <div className="mb-4 lg:mb-0">
          <h3 className="text-lg font-bold">Example Company</h3>
          <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="mb-4 lg:mb-0">
          <h3 className="text-lg font-bold">Contact Us</h3>
          <p className="mt-2">Email: contact@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer" className="text-xl">
            facebook
          </a>
          <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer" className="text-xl">
            
          </a>
          <a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer" className="text-xl">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>&copy; {new Date().getFullYear()} Example Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;