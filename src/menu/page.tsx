import Link from "next/link";

const Menu = () => {
    return (
        <ul>
            <li><Link href={'/'}>home</Link></li>
            <li><Link href={'/users'}>users</Link></li>
            <li><Link href={'/posts'}>posts</Link></li>
            <li><Link href={'/users/id'}>usersId</Link></li>
            <li><Link href={'/posts/id'}>postsId</Link></li>
            <li><Link href={'/comments/id'}>comments/Id</Link></li>
        </ul>
    );
};
export default Menu;