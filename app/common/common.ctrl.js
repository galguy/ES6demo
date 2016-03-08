import {commonFactory} from './common.srv';

export class CommonController
{
    constructor(commonFactory)
    {
        this.newMsg = commonFactory.get();
    }
}