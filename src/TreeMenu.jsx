require('./TreeMenu.scss');

module.exports=function(props){
    const rootNode=$(props.container),
        winObj=window,
        winWidth=props.winWidth,
        winHeight=props.winHeight,
        outTime=510;

    var menuIndex=0;

    function subShow(mid){
        mid=`.menu${mid}>.submenus`;
        function show(node){
            const width=node.width(),
                height=~~(0.5*node.height()),
                contWidth=rootNode.width();
            
            winObj.menuPos.top < height ? node.css('transform',`translateY(-${winObj.menuPos.top}px)`) : ((winObj.menuPos.top+height) > winHeight && node.css('transform',`translateY(-${winHeight-2*height}px)`));
            (contWidth+width+winObj.menuPos.left) > winWidth && node.css('left',`-100%`);

            node.css('display','inline-block');
            // console.log('show submenu:',contWidth,width,winObj.menuPos,winWidth);
        }
        return ()=>{
            const node=rootNode.find(mid);
            node.attr('state','1');
            window.setTimeout(()=>{
                if('1'===node.attr('state')){
                    show(node);
                }
            },outTime);
        };
    }

    function subHide(mid,isClick){
        var hide;
        if(!!isClick){
            return ()=>{
                rootNode.hide();
                // console.log('click hide');
            };
        }else{
            mid=`.menu${mid}>.submenus`;
            hide=(node)=>{
                node.css('display','none');
            };
            return ()=>{
                const node=rootNode.find(mid);
                node.attr('state','0');
                window.setTimeout(()=>{
                    if('0'===node.attr('state')){
                        hide(node);
                    }
                },outTime);
                // console.log('leave hide');
            };
        }
    }

    function getClickEvt(mid,clickFunc){
        mid=subHide(mid,true);
        return (e)=>{
            e.stopPropagation();
            mid();
            clickFunc();
        };
    }

    function productMenuJsx(menuObj){
        // console.warn('productMenuJsx======>',menuObj);
        return menuObj.map((menu,index)=>{
            const hasSub=!!menu.subMenus;
            var subMenus;
            if(hasSub){
                subMenus=(<ul className="submenus menu-root">{productMenuJsx(menu.subMenus)}</ul>);
            }
            menuIndex++;
            return <li className={`menu${menuIndex} menu ${hasSub?'has-sub ':' '}${menu.className||''}`}
                        data-ccn={menu.className||null}
                        key={`menu${menuIndex}`}
                        onClick={hasSub?null:getClickEvt(menuIndex,menu.click)}
                        onMouseEnter={hasSub?subShow(menuIndex):null}
                        onMouseLeave={hasSub?subHide(menuIndex):null}>{menu.text}{subMenus}</li>
        });
    }

    return (
        <ul className="menu-root">
            {productMenuJsx(props.menus)}
        </ul>
    );
};