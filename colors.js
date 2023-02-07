let Links =
    {
        SetColor : function(color)
        {
        let Alist = document.getElementsByClassName('article')[0].querySelectorAll('a');
        var i = 0;
        while(i < Alist.length)
            {
                Alist[i].style.color = color;
                i= i + 1;
            }    
        }
    }

    let H2 = 
    {
        SetColor : function(color)
        {
        let h2list = document.querySelectorAll('h2');
        var i = 0
        while( i < h2list.length )
            { h2list[i].style.color = color;
            i = i + 1;
            }
        }
    }
    
    /*
    function H2SetColor(color)
    {
        var h2list = document.querySelectorAll('h2');
        var i = 0
        while( i < h2list.length )
        { h2list[i].style.color = color;
            i = i + 1;
        }
    }
    */

    let Body =
    {
        
        SetColor : function(color)
        {
            document.body.style.color = color;
        },
        SetBackgroundColor : function(color)
        {
            document.body.style.backgroundColor = color;
        }
    }
    /*
    function BodySetColor(color)
    {
        document.body.style.color = color;
    }
    function BodySetBackgroundColor(color)
    {
        document.body.style.backgroundColor = color;
    }
    */
    
    function DayNightHandler(self)
    {
    if (self.value==='Night Mode')
        {
        Body.SetBackgroundColor('black');
        Body.SetColor('white');
        //BodySetBackgroundColor('black'); //document.body.style.BackgroundColor='black';
        //BodySetColor('white'); // document.body.style.color='white';
        self.value='Day Mode';
        // var h2list = document.querySelectorAll('h2');
        // var i = 0
        // while( i < h2list.length)
        // {h2list[i].style.color = 'yellowgreen'
        //     i = i + 1;
        // }
        //=> 이 코드 대신에 function setColor를 사용한다.
        //H2SetColor('yellowgreen');
        H2.SetColor('aquamarine');
        Links.SetColor('yellow');
        }
    else
        {
        Body.SetBackgroundColor('white');
        Body.SetColor('black');
        //BodySetBackgroundColor('white'); // document.body.style.backgroundColor='white';
        //BodySetColor('black');  //  document.body.style.color='black';
        self.value='Night Mode';

        // var h2list = document.querySelectorAll('h2');
        // var i = 0
        // while( i < h2list.length)
        // {h2list[i].style.color = 'black'
        //     i = i + 1;
        // }
        //=> 이 코드 대신에 function setColor를 사용한다.
        //H2SetColor('black');
        H2.SetColor('black');
        Links.SetColor('coral');
        } 
    } 