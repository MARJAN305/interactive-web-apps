// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

//book1 buttons
//i used querselector instead of getelementid
//question how do i select a specific class?
const reserve = document.querySelector('#book1 .reserve')
const checkout = document.querySelector('#book1 .checkout')
const checkin = document.querySelector('#book1 .checkin')

reserve.isDisabled = true
checkout.isDisabled = true
checkin.isDisabled = false

//book2 buttons
const reserve = document.querySelector('#book2 .reserve')
const checkout = document.querySelector('#book2 .checkout')
const checkin = document.querySelector('#book2 .checkin')

reserve.isDisabled = true
checkout.isDisabled = true
checkin.isDisabled = true

//book3 buttons
const reserve = document.querySelector('#book3 .reserve')
const checkout = document.querySelector('#book3 .checkout')
const checkin = document.querySelector('#book3.checkin')

reserve.isDisabled = true
checkout.isDisabled = true
checkin.isDisabled = false

//grey&black
reserve.button.style.

greyandblack(reserve)
greyandblack(checkout)
greyandblack(checkin)

//styling
const overdue = document.querySelector('status').style.textDecorationColor = 'red'
const reserve = document.querySelector('status').style.textDecorationColor = 'blue'
const shelf = document.querySelector('status').style.textDecorationColor = 'green'
