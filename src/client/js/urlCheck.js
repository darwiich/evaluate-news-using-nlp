function check(inputText) {
  let regexpo = /^(http|https):\/\/[^ "]+$/;
  return regexpo.test(inputText);
}

export { check };
