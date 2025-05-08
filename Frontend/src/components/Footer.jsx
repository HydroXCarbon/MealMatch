const Footer = () => {
    return (
      <footer className="bg-mealmatch-footer text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-2xl font-bold">MealMatch</h3>
            <p className="text-sm mt-2">(+12)-345-678-9</p>
            <p className="text-sm">
              <a href="mailto:MealMatch@gmail.com" aria-label="Email MealMatch">MealMatch@gmail.com</a>
            </p>
          </div>
          <div>
            <h4 className="text-base font-bold">Support</h4>
            <ul className="mt-2 text-sm space-y-2">
              <li><a href="#" className="hover:text-mealmatch-teal">Contact Us</a></li>
              <li><a href="#" className="hover:text-mealmatch-teal">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-bold">MealMatch</h4>
            <ul className="mt-2 text-sm space-y-2">
              <li><a href="#" className="hover:text-mealmatch-teal">About</a></li>
              <li><a href="#" className="hover:text-mealmatch-teal">News</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-bold">Account</h4>
            <ul className="mt-2 text-sm space-y-2">
              <li><a href="#" className="hover:text-mealmatch-teal">Sign In</a></li>
              <li><a href="#" className="hover:text-mealmatch-teal">Create Account</a></li>
            </ul>
          </div>
        </div>
        <p className="text-center text-xs mt-6">Copyright © 2025 MealMatch</p>
      </footer>
    );
  };
  
  export default Footer;