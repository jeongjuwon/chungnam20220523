import { Link } from "react-router-dom";

export default function TopMenu() {
  return (
    <ul>
      <li>
        <Link to="/">정치</Link>
      </li>
      <li>
        <Link to="/news/a">사회</Link>
      </li>
      <li>
        <Link to="/news/b">경제</Link>
      </li>
      <li>
        <Link to="/news/c">IT</Link>
      </li>
      <li>
        <Link to="/news/d">금융</Link>
      </li>
      <li>
        <Link to="/news/e">정치</Link>
      </li>
      <li>
        <Link to="/news/f">문화</Link>
      </li>
      <li>
        <Link to="/news/g">여행</Link>
      </li>
    </ul>
  );
}
