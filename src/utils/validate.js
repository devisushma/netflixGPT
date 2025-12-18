export const checkValidate = (name, email, password) => {
  const emailCheck = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email)
  const passwordCheck = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password)
  const nameCheck = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(name)
  if(nameCheck && !nameCheck) return "name is not valid"
  if(!emailCheck) return "email is not valid"
  if(!passwordCheck) return "password is not valid"
  return null
}