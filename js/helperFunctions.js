// Manipulates responseField to render a formatted and appropriate message

const renderResponse = (res) => {
  const inputField = document.querySelector('#input');
  const errorMessage= document.querySelector('.errorMessage');
    // Displays either message depending on results
    if(res.errors){
      inputField.classList.add('inputError');
      errorMessage.className="errorMessage--active";
      setTimeout(() => {
        inputField.classList.remove('inputError');
        errorMessage.className="errorMessage";
      }, 3000)
    } else {
      // var li = document.createElement("li");
      // // var shortUrl=${res.shortUrl};
      // li.appendChild(document.createTextNode(`<div>${res.shortUrl}</div> <div>${urlToShorten}</div> <button>Copy</button>`));
      // li.className='rendered-link';
      // responseField.appendChild(li);
      const urlToShorten = inputField.value;
      const shortUrl=`${res.shortUrl}`;
    
      
      const shortBox=document.createElement('div');
      shortBox.classList.add('short');


      const copyButton=document.createElement('button');
      copyButton.classList.add('copyButton');
      copyButton.classList.add('copyButton--coppied');
      copyButton.innerHTML='Copy';
      copyButton.addEventListener('click', copyLink);

      const userLink=document.createElement('h5');
      userLink.className='user-link'
      userLink.innerHTML=urlToShorten;

      const shortLink=document.createElement('a')
      shortLink.className='short-link';
      shortLink.href='https://'+ shortUrl;
      shortLink.innerHTML= shortUrl;

      shortBox.append(userLink, shortLink, copyButton);

      responseField.appendChild(shortBox);

      // responseField.appendChild = `<li class="rendered-link"><div class="rendered-link__box">Your shortened url is:${res.shortUrl} </div></li>`;
    }
  }
  function copyLink() {
    const link = this.parentElement.childNodes[1].innerHTML
    navigator.clipboard.writeText(link)
  
    this.classList.add('copied')
    this.innerHTML = 'Copied!'
  
    setTimeout(() => {
      this.classList.remove('copied')
      this.innerHTML = 'Copy'
    }, 2000)
  }
  // Manipulates responseField to render an unformatted response
  const renderRawResponse = (res) => {
    // Displays either message depending on results
    if(res.errors){
      responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
    } else {
      // Adds line breaks for JSON
      let structuredRes = JSON.stringify(res).replace(/,/g, ", \n");
      structuredRes = `<pre>${structuredRes}</pre>`;
      responseField.innerHTML = `${structuredRes}`;
    }
  }