document.addEventListener('DOMContentLoaded', function() {
    const faculties = [
        "คณะนิติศาสตร์",
        "คณะพาณิชยศาสตร์และการบัญชี",
        "คณะรัฐศาสตร์",
        "คณะเศรษฐศาสตร์",
        "คณะสังคมสงเคราะห์ศาสตร์",
        "คณะสังคมวิทยาและมานุษยวิทยา",
        "คณะศิลปศาสตร์",
        "คณะวารสารศาสตร์และสื่อสารมวลชน",
        "คณะวิทยาศาสตร์และเทคโนโลยี",
        "คณะวิศวกรรมศาสตร์",
        "คณะสถาปัตยกรรมและการผังเมือง",
        "คณะศิลปกรรมศาสตร์",
        "คณะแพทยศาสตร์",
        "คณะสหเวชศาสตร์",
        "คณะทันตแพทยศาสตร์",
        "คณะพยาบาลศาสตร์",
        "คณะสาธารณสุขศาสตร์",
        "คณะเภสัชศาสตร์",
        "คณะวิทยาการเรียนรู้และศึกษาศาสตร์"
    ];

    const selectElement = document.getElementById('selectElement');

    faculties.forEach(faculty => {
        const option = document.createElement('option');
        option.text = faculty;
        selectElement.appendChild(option);
    });
});