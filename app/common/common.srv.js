export function commonFactory($log){

    class CommonMessages{
        constructor()
        {

        }

        get(){
            return 'Hello World...';
        }
    }
    return new CommonMessages();
}
