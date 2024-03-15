function dataPersonal() {
    let forms = document.getElementById('frm');
    let nama = forms.nama.value;
    let pekerjaan = forms.pekerjaan.value;
    let hobi = forms.hobi.value;
    let output = `
    <table border='1'>
        <tr>
            <td><b>Nama</b></td>
            <td>${nama}</td>
        </tr>
        <tr>
            <td><b>Pekerjaan</b></td>
            <td>${pekerjaan}</td>
        </tr>
        <tr>
            <td><b>Hobi</b></td>
            <td>${hobi}</td>
        </tr>
    </table>
    `
    let no_input = "<span style='color: red; font-weight: bold;'>Mohon Isi Input Dengan Lengkap</span>";
    let hasil = (nama && pekerjaan && hobi != '') ? output : no_input;
    document.getElementById('hasil').innerHTML = hasil;
}