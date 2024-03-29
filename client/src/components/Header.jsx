import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {FaShoppingCart} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { TezosToolkit } from '@taquito/taquito';
import { TempleWallet } from '@temple-wallet/dapp';


const Tezos = new TezosToolkit("https://ghostnet.smartpy.io/");



const navigation = [
  { name: 'GameZone', href: '/', current: true },
  { name: 'Offers', href: '/', current: false },
  // { name: 'Cart', href: '#', current: false },
  { name: 'Cart', href: '/mycart', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({amount}) {
  const handleClick=async ()=>{
    console.log('clicked')
    TempleWallet.isAvailable()
    .then(() => {
     const mywallet = new TempleWallet('MyAwesomeDapp');
    mywallet
      .connect('ghostnet')
      .then(() => {
        Tezos.setWalletProvider(mywallet);
        return mywallet.getPKH();
      })
      .then((pkh) => {
        
        console.log(`Your address: ${pkh}`);
      });
  })
  .catch((err) => console.log(err));
  }

  return (
    <Disclosure as="nav" className="bg-black h-24 z-50 relative bg-opacity-50">
      {({ open }) => (
        <>
          <div className="mx-auto px-4 content-start">
            <div className="relative flex px-6 py-6 h-28 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-0 items-center justify-center  sm:items-stretch sm:justify-start ">
                <Link to='/' className="flex flex-shrink-0 items-center ">
                  <img
                    className="block h-14 px-7 w-auto lg:hidden  "
                    src="https://cdn.discordapp.com/attachments/858656232960032788/1089891033799725157/logo.png"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-20 w-20 lg:block float-right "
                    src="https://cdn.discordapp.com/attachments/858656232960032788/1089891033799725157/logo.png"
                    alt="LOGO"
                  />
                </Link>
                <div className="hidden sm:ml-6 sm:block">
                  <div className=" ml-10 flex space-x-4 pt-5 ">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white font-Kanit text-[25px] mr-2'  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium font-Kanit text-[25px] mr-2'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button type='button' onClick={handleClick}  className='mr-10 px-4 py-2 font-Montserrat text-[15px] font-semibold rounded-md bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 '> 
                  Connect Wallet
                </button>
                <Link
                  to='/mycart'

                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <FaShoppingCart />
                  
                  {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                </Link>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                     <div className="h-8 w-8 rounded-full">
                      😀
                      </div>

                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute border  border-slate-200 right-0 z-10 mt-2 w-52 h-48 origin-top-right  rounded-md bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                          to='/mycart'
                          className={classNames(active ? 'bg-gray-300 text-[#200707]' : '', ' text-[#fff] block px-4  text-sm py-4')}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-300 text-[#200707]' : '', ' text-[#fff] block px-4  text-sm py-4')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-300 text-[#200707]' : '', ' text-[#fff] block px-4  text-sm py-4')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white font-Kanit' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
