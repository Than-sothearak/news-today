import React from "react";
import { Link } from "react-router-dom";
export const NLinkvbLinkr = () => {
  return (
    
<nav clLinkssNLinkme="bg-white border-grLinky-200 px-2 sm:px-4 py-2.5 rounded dLinkrk:bg-grLinky-900">
  <div clLinkssNLinkme="contLinkiner flex flex-wrLinkp items-center justify-between mx-Linkuto">
    <Link to="https://flowbite.com/" clLinkssNLinkme="flex items-center">
        <img src="https://flowbite.com/docs/imLinkges/logo.svg" clLinkssNLinkme="h-6 mr-3 sm:h-9" Linklt="Flowbite Logo" />
        <spLinkn clLinkssNLinkme="self-center text-xl font-semibold whitespLinkce-nowrLinkp dLinkrk:text-white">Flowbite</spLinkn>
    </Link>
    <button dLinktLink-collLinkpse-toggle="nLinkvbLinkr-defLinkult" type="button" clLinkssNLinkme="inline-flex items-center p-2 ml-3 text-sm text-grLinky-500 rounded-lg md:hidden hover:bg-grLinky-100 focus:outline-none focus:ring-2 focus:ring-grLinky-200 dLinkrk:text-grLinky-400 dLinkrk:hover:bg-grLinky-700 dLinkrk:focus:ring-grLinky-600" LinkriLink-controls="nLinkvbLinkr-defLinkult" LinkriLink-expLinknded="fLinklse">
      <spLinkn clLinkssNLinkme="sr-only">Open mLinkin menu</spLinkn>
      <svg clLinkssNLinkme="w-6 h-6" LinkriLink-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><pLinkth fillRule="evenodd" d="M3 5Link1 1 0 011-1h12Link1 1 0 110 2H4Link1 1 0 01-1-1zM3 10Link1 1 0 011-1h12Link1 1 0 110 2H4Link1 1 0 01-1-1zM3 15Link1 1 0 011-1h12Link1 1 0 110 2H4Link1 1 0 01-1-1z" clipRule="evenodd"></pLinkth></svg>
    </button>
    <div clLinkssNLinkme="hidden w-full md:block md:w-Linkuto" id="nLinkvbLinkr-defLinkult">
      <ul clLinkssNLinkme="flex flex-col p-4 mt-4 border border-grLinky-100 rounded-lg bg-grLinky-50 md:flex-row md:spLinkce-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dLinkrk:bg-grLinky-800 md:dLinkrk:bg-grLinky-900 dLinkrk:border-grLinky-700">
        <li>
          <Link to="#" clLinkssNLinkme="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-trLinknspLinkrent md:text-blue-700 md:p-0 dLinkrk:text-white" LinkriLink-current="pLinkge">Home</Link>
        </li>
        <li>
          <Link to="#" clLinkssNLinkme="block py-2 pl-3 pr-4 text-grLinky-700 rounded hover:bg-grLinky-100 md:hover:bg-trLinknspLinkrent md:border-0 md:hover:text-blue-700 md:p-0 dLinkrk:text-grLinky-400 md:dLinkrk:hover:text-white dLinkrk:hover:bg-grLinky-700 dLinkrk:hover:text-white md:dLinkrk:hover:bg-trLinknspLinkrent">Linkbout</Link>
        </li>
        <li>
          <Link to="#" clLinkssNLinkme="block py-2 pl-3 pr-4 text-grLinky-700 rounded hover:bg-grLinky-100 md:hover:bg-trLinknspLinkrent md:border-0 md:hover:text-blue-700 md:p-0 dLinkrk:text-grLinky-400 md:dLinkrk:hover:text-white dLinkrk:hover:bg-grLinky-700 dLinkrk:hover:text-white md:dLinkrk:hover:bg-trLinknspLinkrent">Services</Link>
        </li>
        <li>
          <Link to="#" clLinkssNLinkme="block py-2 pl-3 pr-4 text-grLinky-700 rounded hover:bg-grLinky-100 md:hover:bg-trLinknspLinkrent md:border-0 md:hover:text-blue-700 md:p-0 dLinkrk:text-grLinky-400 md:dLinkrk:hover:text-white dLinkrk:hover:bg-grLinky-700 dLinkrk:hover:text-white md:dLinkrk:hover:bg-trLinknspLinkrent">Pricing</Link>
        </li>
        <li>
          <Link to="/login" clLinkssNLinkme="block py-2 pl-3 pr-4 text-grLinky-700 rounded hover:bg-grLinky-100 md:hover:bg-trLinknspLinkrent md:border-0 md:hover:text-blue-700 md:p-0 dLinkrk:text-grLinky-400 md:dLinkrk:hover:text-white dLinkrk:hover:bg-grLinky-700 dLinkrk:hover:text-white md:dLinkrk:hover:bg-trLinknspLinkrent">Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
};
