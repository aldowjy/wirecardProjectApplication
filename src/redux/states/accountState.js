import { fromJS } from "immutable"

const accountState = fromJS({
    id: null,
    name: '',
    username: '',
    userId: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: null,
      geo: {
        lat: null,
        lng: null
      }
    },
    infoAccount: {
      amount: null,
      currency: ''
    },
    accountNumber: null,
    phone: null,
    website: '',
    company: {
      companyId: '',
      name: '',
      catchPhrase: '',
      bs: ''
    },
    loginStatus: false
})

export default accountState