var comp = 
{
  rachel : 'racheltj',
  clearUsername : 'qanon',
  clearPassword : 'noBitches',
  deletePassword: 'bobo',
  reply : false,
  max : 4,
  num : 0,
  recent: 0,
  current : 0,
  back : 105,
}

function start()
{
  setComments();
  //checkReply();
}

function scrollFunction(id)
{
    let e = document.getElementById(id);
    e.scrollIntoView
    ({
      block: 'start',
      behavior: 'smooth',
      inline: 'start'
    });
  }

  function redirect(id)
  {
    window.location.href = id + '.html';
  }

  function newTab(place)
  {
    window.open(
    "https://deadfishh.github.io./stem/" + place);
}

function grabify(id)
{
  switch (id)
  {
    case "music":
    {
      window.location.href = "https://grabify.link/RGH4Y5";
      break;
    }
    case "nonogram":
    {
      window.open("https://grabify.link/IQX2UB");
      break;
    }
  }
}

  function transform(id)
  {
    let e = document.getElementById(id);
    e.style.transform = 'rotate(20deg)';
  }

  function songTrack(link)
  {
    window.location.href = link;
  }
    
function idk()
{
  var commentBoxValue = document.getElementById("comment-box").value + "";
  var nameBoxValue = document.getElementById("name-box").value + "";
  //document.getElementById("name-box").value = "";
  document.getElementById("comment-box").value = "";
  if (!commentBoxValue || !nameBoxValue)
  {
    return;
  }
   
      var comment = document.createElement("comment");
      comment.setAttribute('class', 'comment');
      /*if (nameBoxValue === comp.rachel)
      {
        li.style.backgroundColor = "plum";
        nameBoxValue = "rachel";
      }*/
      nameBoxValue = checkVerified(nameBoxValue, comment);
      if (nameBoxValue === comp.clearUsername && commentBoxValue === comp.clearPassword)
      {
        localStorage.clear();
        location.reload();
        return;
      }
      else if (nameBoxValue < localStorage.length && commentBoxValue === comp.deletePassword)
      {
        localStorage.removeItem(nameBoxValue);
        location.reload();
        return;
      }
      // make the comment box
      var li = document.createElement('li');
      var name = document.createElement("name");
      name.setAttribute('class', 'name');

      // get the date and set it up
      var date = new Date();
      date = date.toString().toLowerCase();
      date = date.split(" ");
      date = "\xa0\xa0\xa0" + date[1] + " " + date[2] + " " + date[3];

      name.textContent = nameBoxValue + date;

      var top = document.createElement("top");
      top.setAttribute('class', 'top');

      comment.textContent = commentBoxValue;
      var textBox = document.getElementById("unordered");

      // is this a reply
      if (comp.reply)
      {
        li.style.marginLeft += "50px";
        localStorage.setItem(comp.num + '.1', name.textContent + "cvm" + comment.textContent);
      }
      // otherwise treat it as normal
      else
      {
        localStorage.setItem(localStorage.length, name.textContent + "cvm" + comment.textContent);
        var reply = document.createElement("button");
        reply.setAttribute('class', 'reply');
        reply.textContent = "reply";
        repEvent(reply, comp.num);
      }
      top.appendChild(name);
      if (!comp.reply)
      {
        top.appendChild(reply);
      }
      li.appendChild(top);
      li.appendChild(comment);
      textBox.appendChild(li);
      comp.reply = false;
}


function setComments()
{
  var i; 
  for (i = 0; i < localStorage.length; i++)
  {
    pixel = false;
    var total = localStorage.getItem(i);
    if (!total)
    {
      continue;
    }
    georgeThePepper(total, pixel);
      
      // seeing if this has any comments
      for (j = 1; j < comp.max; j++)
      {
        var key = i + '.' + j;
        var repTotal = localStorage.getItem(key);
        if (!repTotal)
        {
          continue;
        }
        pixel = true;
        georgeThePepper(repTotal, pixel)
      }
  }
}

function georgeThePepper(total, pixel)
{
  var comment = document.createElement('comment')
    comment.setAttribute('class', 'comment');

    arr = total.split('cvm');
    comment.textContent = arr[1];

    var li = document.createElement('li');
    var top = document.createElement("top");
    top.setAttribute('class', 'top');

    var name = document.createElement("name");
    name.textContent = arr[0];
    name.setAttribute('class', 'name');

    var reply = document.createElement('button');
    repEvent(reply, comp.num);
    comp.num++;
    reply.textContent = 'reply';
    reply.setAttribute('class', 'reply');
    
    top.appendChild(name);

    if (pixel)
    {
      li.style.marginLeft += "50px";
    }
    else
    {
      top.appendChild(reply);
    }
    
    

    var textBox = document.getElementById("unordered");
    li.appendChild(top);
    li.appendChild(comment); 
    textBox.appendChild(li);
}

function repEvent(reply, i)
{
  var id = 'reply' + i;
  reply.setAttribute('id', id);

  reply.addEventListener('mousedown', function()
    {
      if (comp.reply === true)
      {
        return;
      }
      commentBox = document.getElementById('comment-box');
      commentBox.value = "@test ";
      comp.max++;
      comp.reply = true;


    });
}

function checkVerified(name, li)
{
  switch(name)
  {
    case comp.rachel:
      li.style.backgroundColor = 'plum';
      return 'rachel';
    }
    return name;
}

function checkReply()
{
  var all = document.getElementsByClassName("reply");
  for (var i = 0; i < all.length; i++)
  {
    var reply = all[i];
    repEvent(reply, i);
}
}

function findCommentNum(rep)
{
  var id = rep.id;
  var num = id.substring(id.length - 1);
  return num;
}


function forwards()
{
  var feature = document.getElementsByClassName('feature');
  for (var i = 0; i < feature.length; i++)
  {
      var delay = ' -' + comp.current + 's ';
      feature[i].style.animation = 'slide 30s' + delay + 'infinite';
  }
  comp.current += 5;
}

function backwards()
{
  var feature = document.getElementsByClassName('feature');
  for (var i = 0; i < feature.length; i++)
  {
      var delay = ' -' + comp.back + 's ';
      feature[i].style.animation = 'slide 30s' + delay + 'infinite';
  }
comp.back -= 5;
}
