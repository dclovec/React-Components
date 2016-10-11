#React-Components
Some react components.
    Save mind.

EditableSelect
----
Just like its name, it's a editable select html element component.To get its value, use "*instance.value*".<br />
**Example**:
  ```javascript
  const es=ReactDOM.render(
      <EditableSelect placeholder="enter or select">
        <opt value="0">option a</opt>
        <opt value="1">option b</opt>
        <opt value="2">option c</opt>
      </EditableSelect>
    );
    console.log(es.value);//the selected value. 
    //                      maybe the selected value("0"/"1"/"2") or the string user entered.
  ```
While inited:
![img](https://raw.githubusercontent.com/dclovec/React-Components/master/normal.png)<br />
While focused:
![img](https://raw.githubusercontent.com/dclovec/React-Components/master/focus.png)


TreeMenu
----
It's like the right-click menu in windows, can have one-level sub-menus<br />
**Example**:
   ```javascript
   ReactDOM.render(
        <TreeMenu
            container={data.container}
            menus={data.menuObjs}
            winWidth={winWidth}
            winHeight={winHeight} />,
        container
    );
   ```
**Note**:This is customized for my project,you can change it!(By default, need jquery)
   The prop "menus" is important, it's a array of menu data:
      while no sub-menus:
        {
          text:'shown name',
          className:'menu class attribute',
          click:function(){...}//click event
        }

      while has sub-menus:
        {
          text:'shown name',
          className:'menu class attribute',
          subMenus:{}//sub-menus data object,like no sub-menus
        }
    className is unnecessary.
**menus fast preview**:
    __________________
   |                  |
   |      menu 1      |
   |__________________|  ______________
   |                  | |              |
   |      menu 2    > | | sub menu 2-1 |
   |__________________| |______________|
                        |              |
                        | sub menu 2-2 |
                        |______________|

  above menu, need thus menu object array:
    [
      {
        text:"menu 1",
        click:function(){console.log('menu 1 clicked.');}
      },
      {
        text:'menu 2',
        subMenus:[
          {
            text:"sub menu 2-1",
            click:function(){console.log('sub menu 2-1 clicked.');}
          },
          {
            text:"sub menu 2-2",
            click:function(){console.log('sub menu 2-2 clicked.');}
          }
        ]
      }
    ]