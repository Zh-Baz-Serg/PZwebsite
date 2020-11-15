const news = document.querySelector("#news")

news.addEventListener('scroll', () => {
    let blocks = news.querySelectorAll('article')
    blocks.forEach(block => {
        let blockPos = block.getBoundingClientRect().top
        let blockPos1 = block.getBoundingClientRect().bottom
        let screenPos = news.getBoundingClientRect().bottom + 30
        let screenPos1 = news.getBoundingClientRect().top - 30
        if(blockPos < screenPos || blockPos1 > screenPos1)
        {
            block.classList.add('news_appear')
        }
        if(blockPos > screenPos || blockPos1 < screenPos1)
        {
            block.classList.remove('news_appear')
        }
      })
})

window.addEventListener('load', () => {
    let blocks = news.querySelectorAll('article')
    blocks.forEach(block => {
        let blockPos = block.getBoundingClientRect().top
        let screenPos = news.getBoundingClientRect().bottom + 30
        console.log(blockPos - screenPos)
        if(blockPos < screenPos)
        {
            block.classList.add('news_appear')
        }
      })
})

const CId = document.getElementById('f11')
const Hcrd = document.getElementById('HealthCard')
const Dn = document.getElementById('f3')
const form1 = document.getElementById('form1')
const form2 = document.getElementById('form2')
const err1 = document.getElementById('error1')
const err2 = document.getElementById('error2')
const err = document.getElementById('error3')

form1.addEventListener('submit', (e) => {
    let message1 = []
    let message2 = []
    let check1 = 0
    let check2 = 0
    const chekaem = CId.value
    if(chekaem === '') {
        check1++;
        message1.push("<errorstyle> 'Client ID' field cannot be empty")
    }
    else if(!CId.value.match(/^[0-9]+$/))
    {
        check1++;
        message1.push("<errorstyle> 'Client ID' field: only numbers required")
    }
    else if(CId.value.length <= 5 )
    {
        check1++;
        message1.push("<errorstyle> 'Client ID' field: more than 5 symbols required")
    }

    let sdarray = /^[0-9A-Za-z]+$/
    if(Hcrd.value === '' || Hcrd.value == null) {
        check2++;
        message2.push("<errorstyle> 'Health Card' field cannot be empty")
    }
    else if(!Hcrd.value.match(sdarray))
    {
        check2++;
        message2.push("<errorstyle> 'Health Card' field: forbidden symbols found; use 1-9 and A-z only")
    }
    else if(Hcrd.value.length != 8)
    {
        check2++;
        message2.push("<errorstyle> 'Heath Card' field 8 symbols required")
    }

    err1.innerHTML = ""
    err2.innerHTML = ""
    if (check1 > 0 || check2 > 0)
    {
        e.preventDefault()
        if(check1>0) {
        message1.forEach((element) => { err1.innerHTML += element})}
        if(check2>0) {
            message2.forEach((element) => { err2.innerHTML += element})}
    }
})

form2.addEventListener('submit', (e) => {
  let message = []
  let check = 0
  let sdarray = /^[A-Za-z ]+$/
  if(Dn.value === '' || Dn.value == null) {
      check++;
      message.push("<errorstyle> Field cannot be empty")
  }
  else if(!Dn.value.match(sdarray))
  {
      check++;
      message.push("<errorstyle> Forbidden symbols found; use Latin only")
  }
  else if(Dn.value.length <= 3 )
  {
      check++;
      message.push("<errorstyle> More than 3 symbols required")
  }

  err.innerHTML = ""
  if (check > 0)
    {
        e.preventDefault()
        if(check>0) {
            message.forEach((element) => { err.innerHTML += element})}
    }
})
  
const openMod = document.querySelectorAll('[data-modal-target]')
const closeMod = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openMod.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeMod.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}