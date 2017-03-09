export class Tweet {
  coordinates:any;
  created_at:string;
  entities:any;
  favorite_count:number
  favorited:boolean;
  geo:any;
  id:number;
  id_str:string
  in_reply_to_screen_name:any;
  in_reply_to_status_id:any;
  in_reply_to_status_id_str:any;
  in_reply_to_user_id:any;
  in_reply_to_user_id_str:any;
  is_quote_status:any;
  lang:string;
  place:any;
  retweet_count:number;
  retweeted:any
  source: string;
  text:string;
  truncated:boolean;
  user: {
    name: string;
    location: string;
    profile_image_url: string;
    created_at: string;
    followers_count: string;
  };
}
