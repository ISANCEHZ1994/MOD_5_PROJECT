class ApplicationController < ActionController::Base

    skip_before_action :verify_authenticity_token
    before_action :check_authentication

    
    def encode_token(payload)# for token generation
        JWT.encode(payload, "KingdomHearts", "HS256") #algo is optioinal as a default HS256
    end
    #templet for applicaiton controller
    def auth_header
        # { 'Authorization': 'Bearer <token>' }
        request.headers['Authorization']
      end
    
      def current_client
        if decoded_token
          client_id = decoded_token["client_id"]
  
          Client.find(client_id)
        end
      end
    
      def decoded_token
         # token => "eyJhbGciOiJIUzI1NiJ9.eyJiZWVmIjoic3RlYWsifQ._IBTHTLGX35ZJWTCcY30tLmwU9arwdpNVxtVU0NpAuI"
        if auth_header
          token = auth_header.split(' ')[1]
            puts token
          begin
           JWT.decode(token,"KingdomHearts")[0] #pass the same key
            # JWT.decode => [{ "user_id"=>"18" }, { "alg"=>"HS256" }]
            # [0] gives us the payload { "user_id"=>"18" }
          rescue JWT::DecodeError
            nil
          end
        end
      end
    
      def check_authentication
        render json: { error: 'Please log in' }, status: 401 if !logged_in?
      end
    
      def logged_in?
        !!current_client
      end

end
