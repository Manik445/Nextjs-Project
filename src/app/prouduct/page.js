import Link from "next/link";

export default function prouduct() {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        <li>
          <Link href="/prouduct/1">produc1</Link>
        </li>
        <li>    
          <Link href="/prouduct/2">produc2</Link>
        </li>
        <li>
          <Link href="/prouduct/3">produc3</Link>
        </li>
        <li>
          <Link href="/prouduct/4">produc4</Link>
        </li>
      </ul>
    </div>
  );
}