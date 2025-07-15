import Swal from "sweetalert2";

export const showError = (message: string) => {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Error',
        timer: 1500,
        html: `<strong>${message}</strong>`,
        showConfirmButton: false,
    })
}

export const showSuccess = (message: string) => {
    Swal.fire({
        position: 'center',
        title: 'Great!',
        timer: 1500,
        html: `<strong>${message}</strong>`,
        showConfirmButton: false,
    })
}