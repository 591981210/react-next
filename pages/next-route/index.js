import Link from 'next/link'
import Router from 'next/router'
import Mynav from '../../components/Mynav'
import Mylayout from '../../layouts/Mylayout'

const NextRoute = () => (
    <div>
        {/*link 无法样式设置*/}
        {/*<Link href="/next-route/teacher" style={{color:'red'}}>*/}
        {/*/!*只允许一个子元素*!/*/}
        {/*/!*<a>teacher</a>*!/*/}
        {/*<p style={{color:'red'}}>teacher</p>*/}
        {/*</Link>*/}
        <Link href={{pathname: '/next-route/teacher', query: {id: 1}}}>
            <a style={{color: 'red', marginRight: '20px'}}>teacher</a>
        </Link>

        {/*<span onClick={()=>Router.push('/next-router/student')}>student</span>*/}
        <p onClick={() => Router.push({pathname: '/next-route/student', query: {id: 1}})}>student</p>
        {/*<Mynav></Mynav>*/}
        {/*<Mylayout>*/}
            <p>next路由学习</p>
        {/*</Mylayout>*/}
    </div>
);

export default NextRoute