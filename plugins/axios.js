import Vue from 'vue'

export default function ({ app, $axios, store }) {
  $axios.onResponseError(async error => {
    let message

    if (error.response === undefined) {
      message = '서버와의 통신에 실패하였습니다.'
    } else {
      if (error.response.data.reasons !== undefined) {
        message = `${
          (window._.isObject(error.response.data.reasons)) ? window._.values(error.response.data.reasons)[0] : error.response.data.reasons
        }`
      } else {
        message = `${error.response.data.message}`
      }
    }

    await Vue.swal({
      html: message,
      width: 400,
      buttonsStyling: false,
      confirmButtonClass: 'v-btn theme--light'
    })

    return Promise.reject(error)
  })
}
