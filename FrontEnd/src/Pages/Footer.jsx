import React from 'react'

function Footer() {
  return (
    <div className="bg-black text-white">
      <footer className="w-full lg:container mx-auto p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Logo + Description */}
        <nav>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-blue-500 text-white p-2 rounded-full">
              ⚡
            </div>
            <span className="font-bold text-lg">Edemy</span>
          </div>
          <p className="text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </nav>

        {/* Company Links */}
        <nav>
          <h6 className="footer-title text-lg mb-3">Company</h6>
          <ul className="space-y-2">
            <li><a className="link link-hover">About us</a></li>
            <li><a className="link link-hover">Contact</a></li>
            <li><a className="link link-hover">Jobs</a></li>
            <li><a className="link link-hover">Press kit</a></li>
          </ul>
        </nav>

        {/* Newsletter */}
        <form>
          <h6 className="footer-title text-lg mb-3">Newsletter</h6>
          <fieldset className="w-full max-w-sm">
            <label className="block mb-2 text-sm">Enter your email address</label>
            <div className="join w-full">
              <input
                type="email"
                placeholder="username@site.com"
                className="input input-bordered join-item w-full"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm">
        © {new Date().getFullYear()} Edemy. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
