module.exports=React.createClass({
	getInitialState:function(){
        return {value:'',opts:[]};
    },
    render:function() {
        var me=this,
            opts=me.props.children.map(function(child, index){
                var prop=child.props;
                return <div className="opt" value={prop.value} key={prop.value} onClick={me.optSelected}>{prop.children}</div>;
            });
        this.state.opts.forEach((opt,index)=>opts.push(
            <div className="opt" value={opt.value} key={opt.value} onClick={me.optSelected}>{opt.text}</div>
        ));
        me=null;
        return (
            <div className="r-es-c">
                <div className="es-oc" style={this.state.ocStyle}>
                    {opts}
                </div>
                <input type="text" value={this.state.value} placeholder={this.props.placeholder||'输入或选择'} className="es-i" onFocus={this.txtFocused} onBlur={this.txtBlured} onChange={this.txtChanged} />
            </div>
        );
    },
    componentWillMount:function(){
    },
    componentDidMount:function(){
        this.saveValue=function(){
            this.value=this.state.value;
        }.bind(this);
    },
    txtFocused:function(){
        this.setState({ocStyle:{height:'auto',border:'1px solid #ccc'}});
    },
    txtBlured:function(){
        var me=this;
        window.setTimeout(function() {
            !me.isSelectBlur && me.setState({ocStyle:{height:'0',border:'none'}});
            me.isSelectBlur=false;
            me=null;
        },170);
    },
    tcInt:null,
    saveValue:null,
    txtChanged:function(e){
        var me=this;
        me.setState({value:e.target.value});
        !!me.tcInt && window.clearTimeout(me.tcInt);
        me.tcInt=window.setTimeout(me.saveValue, 500);
    },
    optSelected:function(e){
        var me=this;
        this.isSelectBlur=true;
        this.setState({ocStyle:{height:'0',border:'none'}, value:e.target.innerHTML});
        me.value=e.target.getAttribute('value');
    },
    value:''
});

require('./EditableSelect.scss');