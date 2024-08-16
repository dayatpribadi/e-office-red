"use strict";
var KTProjectList = {
    init: function () {
        ! function () {
            var t = document.getElementById("kt_project_list_chart");
            if (t) {
                var e = t.getContext("2d");
                new Chart(e, {
                    type: "doughnut",
                    data: {
                        datasets: [{
                            data: [40, 60],
                            backgroundColor: ["#50CD89", "#00A3FF"]
                        }],
                        labels: ["PNS", "PPPK"]
                    },
                    options: {
                        chart: {
                            fontFamily: "inherit"
                        },
                        cutout: "30%",
                        cutoutPercentage: 65,
                        responsive: !0,
                        maintainAspectRatio: !1,
                        title: {
                            display: !1
                        },
                        animation: {
                            animateScale: !0,
                            animateRotate: !0
                        },
                        tooltips: {
                            enabled: !0,
                            intersect: !1,
                            mode: "nearest",
                            bodySpacing: 5,
                            yPadding: 10,
                            xPadding: 10,
                            caretPadding: 0,
                            displayColors: !1,
                            backgroundColor: "#20D489",
                            titleFontColor: "#ffffff",
                            cornerRadius: 4,
                            footerSpacing: 0,
                            titleSpacing: 0
                        },
                        plugins: {
                            legend: {
                                display: !1
                            }
                        }
                    }
                })
            }

            var t = document.getElementById("kt_project_list_chart10");
            if (t) {
                var e = t.getContext("2d");
                new Chart(e, {
                    type: "pie",
                    data: {
                        datasets: [{
                            data: [136, 2.092],
                            backgroundColor: ["#FF3D67", "#00A3FF"]
                        }],
                        labels: ["Terindikasi", "Tidak Terindikasi"]
                    },
                    options: {
                        series: [44, 55, 13, 43, 22],
                        chart: {
                            fontFamily: "inherit"
                        },
                        cutout: "0%",
                        cutoutPercentage: 65,
                        responsive: !0,
                        maintainAspectRatio: !1,
                        title: {
                            display: !1
                        },
                        animation: {
                            animateScale: !0,
                            animateRotate: !0
                        },
                        dataLabels: {
                            enabled: true,
                        },
                        tooltips: {
                            enabled: !0,
                            intersect: !1,
                            mode: "nearest",
                            bodySpacing: 5,
                            yPadding: 10,
                            xPadding: 10,
                            caretPadding: 0,
                            displayColors: !1,
                            backgroundColor: "#20D489",
                            titleFontColor: "#ffffff",
                            cornerRadius: 4,
                            footerSpacing: 0,
                            titleSpacing: 0
                        },
                        plugins: {
                            legend: {
                                display: true,
                                position: 'bottom'
                            }
                        }
                    }
                })
            }

            var t = document.getElementById("kt_project_list_chart11");
            if (t) {
                var e = t.getContext("2d");
                new Chart(e, {
                    type: "pie",
                    data: {
                        datasets: [{
                            data: [18,16,7,5, 1],
                            backgroundColor: ["#FF3D67", "#00A3FF", "#FFA800", "#716aca", "#FFED67"]
                        }],
                        labels: ["Perangkat Daerah", "Puskemas","Kecamatan","Kelurahan", "Rumah Sakit"]
                    },
                    options: {
                        series: [44, 55, 13, 43, 22],
                        chart: {
                            fontFamily: "inherit"
                        },
                        cutout: "40%",
                        cutoutPercentage: 65,
                        responsive: !0,
                        maintainAspectRatio: !1,
                        title: {
                            display: !1
                        },
                        animation: {
                            animateScale: !0,
                            animateRotate: !0
                        },
                        dataLabels: {
                            enabled: true,
                        },
                        tooltips: {
                            enabled: !0,
                            intersect: !1,
                            mode: "nearest",
                            bodySpacing: 5,
                            yPadding: 10,
                            xPadding: 10,
                            caretPadding: 0,
                            displayColors: !1,
                            backgroundColor: "#20D489",
                            titleFontColor: "#ffffff",
                            cornerRadius: 4,
                            footerSpacing: 0,
                            titleSpacing: 0
                        },
                        plugins: {
                            legend: {
                                display: true,
                                position: 'bottom'
                            }
                        }
                    }
                })
            }

            var t = document.getElementById("kt_project_list_chart2");
            if (t) {
                var e = t.getContext("2d");
                new Chart(e, {
                    type: "doughnut",
                    data: {
                        datasets: [{
                            data: [80, 45],
                            backgroundColor: ["#00A3FF", "#FFA800"]
                        }],
                        labels: ["Sudah Diverifikasi", "Belum"]
                    },
                    options: {
                        chart: {
                            fontFamily: "inherit"
                        },
                        cutout: "30%",
                        cutoutPercentage: 65,
                        responsive: !0,
                        maintainAspectRatio: !1,
                        title: {
                            display: !1
                        },
                        animation: {
                            animateScale: !0,
                            animateRotate: !0
                        },
                        tooltips: {
                            enabled: !0,
                            intersect: !1,
                            mode: "nearest",
                            bodySpacing: 5,
                            yPadding: 10,
                            xPadding: 10,
                            caretPadding: 0,
                            displayColors: !1,
                            backgroundColor: "#20D489",
                            titleFontColor: "#ffffff",
                            cornerRadius: 4,
                            footerSpacing: 0,
                            titleSpacing: 0
                        },
                        plugins: {
                            legend: {
                                display: !1
                            }
                        }
                    }
                })
            }

            var t = document.getElementById("kt_project_list_chart3");
            if (t) {
                var e = t.getContext("2d");
                new Chart(e, {
                    type: "doughnut",
                    data: {
                        datasets: [{
                            data: [30, 45, 12, 10, 31, 40, 20, 22, 24, 28, 27, 16, 19, 80, 60],
                            backgroundColor: ["#00A3FF", "#50CD89", "#FFA800", "#FF3D67", "#716aca", "#FFA800", "#FF3D67", "#716aca", "#FFA800", "#FF3D67", "#716aca", "#FFA800", "#FF3D67", "#716aca", "#FFA800"]
                        }],
                        labels: ["Dinsos", "Diskominfo", "Dinkes", "Disnaker", "Disparbud", "Distranstek", "Disperindag", "Dispenda", "Dispora", "Disperkim", "Disperkimtan", "Dispermas", "Disperindag", "Disperkim", "Disperkimtan"]
                    },
                    options: {
                        chart: {
                            fontFamily: "inherit"
                        },
                        cutout: "30%",
                        cutoutPercentage: 65,
                        responsive: !0,
                        maintainAspectRatio: !1,
                        title: {
                            display: !1
                        },
                        animation: {
                            animateScale: !0,
                            animateRotate: !0
                        },
                        tooltips: {
                            enabled: !0,
                            intersect: !1,
                            mode: "nearest",
                            bodySpacing: 5,
                            yPadding: 10,
                            xPadding: 10,
                            caretPadding: 0,
                            displayColors: !1,
                            backgroundColor: "#20D489",
                            titleFontColor: "#ffffff",
                            cornerRadius: 4,
                            footerSpacing: 0,
                            titleSpacing: 0
                        },
                        plugins: {
                            legend: {
                                display: !1
                            }
                        }
                    }
                })
            }

            var t = document.getElementById("kt_project_list_chart30");
            if (t) {
                var e = t.getContext("2d");
                new Chart(e, {
                    type: "doughnut",
                    data: {
                        datasets: [{
                            data: [30, 70],
                            backgroundColor: ["#716aca", "#3d3dd3"]
                        }],
                        labels: ["Laki-Laki", "Perempuan"]
                    },
                    options: {
                        chart: {
                            fontFamily: "inherit"
                        },
                        cutout: "30%",
                        cutoutPercentage: 65,
                        responsive: !0,
                        maintainAspectRatio: !1,
                        title: {
                            display: !1
                        },
                        animation: {
                            animateScale: !0,
                            animateRotate: !0
                        },
                        tooltips: {
                            enabled: !0,
                            intersect: !1,
                            mode: "nearest",
                            bodySpacing: 5,
                            yPadding: 10,
                            xPadding: 10,
                            caretPadding: 0,
                            displayColors: !1,
                            backgroundColor: "#20D489",
                            titleFontColor: "#ffffff",
                            cornerRadius: 4,
                            footerSpacing: 0,
                            titleSpacing: 0
                        },
                        plugins: {
                            legend: {
                                display: true,
                                position: 'bottom',
                            }
                        }
                    }
                })
            }
        }()
    }
};
KTUtil.onDOMContentLoaded((function () {
    KTProjectList.init()
}));