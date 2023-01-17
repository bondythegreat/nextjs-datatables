import Link from "next/link";

export default function Navbar(props) {
  return (
    <div {...props} className={`p-8 ${props.className}`}>
      <div className='text-2xl mb-20 font-bold'>ADMIN SITE</div>
      <ul className='flex flex-col w-full'>
        <li>
          <Link href='/'>Products</Link>
        </li>
        <li>
          <Link href='/carts'>Carts</Link>
        </li>
      </ul>
    </div>
  );
}
