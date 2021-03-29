import React from 'react'
import { createHashHistory } from 'history'
import Filter from './Filter';

export default function Footer(props) {
    const { count, filter, changeFilter } = props;
    const handleLink = (path,e) => {
        e.preventDefault();
        createHashHistory().push(path)//url变化，但不跳转
    }
    return (
        <div className="todo-footer clearfix">
            <div className="pull-left">
                <strong>
                    <span className="count-todos">
                        {count}
                    </span>
                </strong>
                {'items left'}
            </div>
            <div className="pull-right">
                <Filter filter={filter} change={changeFilter} />
            </div>
            <div className="pull-left">
                {/* <a href="" onClick={(e) => handleLink('/', e)}>首页</a> */}
                <a href="#/">首页</a>
            </div>
        </div>
    )
}