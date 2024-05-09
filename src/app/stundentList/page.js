import Link from "next/link";

export default function StudentList() {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        <li>
          <Link href="/studentList/anil">Anil</Link>
        </li>
        <li>
          <Link href="/studentList/sam">Sam</Link>
        </li>
        <li>
          <Link href="/studentList/peter">Peter</Link>
        </li>
        <li>
          <Link href="/studentList/bruce">Bruce</Link>
        </li>
      </ul>
    </div>
  );
}