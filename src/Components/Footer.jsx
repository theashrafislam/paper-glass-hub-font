import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col gap-8 lg:flex-row items-center justify-between px-4">
        <div className="mb-4 lg:mb-0">
          <h3 className="text-lg font-bold">Paper Glass Hub</h3>
          <p className="mt-2">Welcome to Paper Glass Hub, your ultimate destination for all things paper and glass related! Whether you're a crafting enthusiast, an environmental advocate, or a business owner seeking eco-friendly solutions, we've got you covered.</p>
          <p>Explore our comprehensive collection of articles, tutorials, and resources to unleash your creativity and learn about the latest trends in paper and glass industries.</p>
        </div>
        <div className="mb-4 lg:mb-0">
          <h3 className="text-lg font-bold">Contact Us</h3>
          <p>Have a question or suggestion? Feel free to reach out to us!</p>
          <p className="mt-2">Email: contact@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-xl">
          <FaFacebook />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-xl">
          <FaTwitter />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-xl">
          <FaInstagram />
          </a>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>&copy; {new Date().getFullYear()} Paper Glass Hub. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;