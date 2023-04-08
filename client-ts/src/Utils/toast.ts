import iziToast from "izitoast";

export const ToastSuccess = (message: string) => 
{
	iziToast.show({
        title: "Success",
        icon: "ico-success",
        message: message,
        iconColor: "rgb(0, 255, 184)",
        theme: "dark",
        progressBarColor: "rgb(0, 255, 184)",
        position: "topRight",
        transitionIn: "bounceInLeft",
        transitionOut: "fadeOut",
        timeout: 7000
    });
}

export const ToastDanger = (message: string) => 
{
    if(Array.isArray(message))
    {
        for(let i = 0; i < message.length; i++)
        {
            iziToast.error({
                title: "Error",
                icon: "ico-error",
                position: "topRight",
                transitionIn: "bounceInLeft",
                message: message[i],
                timeout: 7000
            });
        }
    }
    else
    {
        iziToast.error({
            title: "Error",
            icon: "ico-error",
            message: message,
            position: "topRight",
            transitionIn: "bounceInLeft",
            timeout: 7000
        });
    }
}

export const ToastWarning = (message: string) => 
{
    iziToast.warning({
        title: "Warning",
        icon: "ico-warning",
        position: "topRight",
        transitionIn: "bounceInLeft",
        message: message,
    });
}

