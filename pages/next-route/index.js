import Link from 'next/link'

const NextRoute = () =>(
    <div>
        {/*link 无法样式设置*/}
        {/*<Link href="/next-route/teacher" style={{color:'red'}}>*/}
            {/*/!*只允许一个子元素*!/*/}
            {/*/!*<a>teacher</a>*!/*/}
            {/*<p style={{color:'red'}}>teacher</p>*/}
        {/*</Link>*/}
        <Link href={{pathname:'/next-route/teacher',query:{id:1}}}>
            <p style={{color:'red'}}>teacher</p>
        </Link>
        next路由学习
    </div>
)

export default  NextRoute