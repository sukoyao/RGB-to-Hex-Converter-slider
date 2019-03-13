function changeRange() {
  const r = parseInt(document.getElementById("r").value)
  const g = parseInt(document.getElementById("g").value)
  const b = parseInt(document.getElementById("b").value)

  const color = "#" + hex(r) + hex(g) + hex(b)

  document.body.style.backgroundColor = color
  document.getElementById("r-label").innerText = r
  document.getElementById("g-label").innerText = g
  document.getElementById("b-label").innerText = b
  document.getElementById("hex-label").innerText = color
}

function hex(value) {
  let hex = value.toString(16).padStart(2, '0')
  return hex
}
