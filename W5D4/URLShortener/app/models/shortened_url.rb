class ShortenedUrl < ApplicationRecord
    def self.random_code #method that shortens a URL
        loop do
        #keep generating codes until we find one that isn't the same as one already stored
            random_code = SecureRandom.urlsafe_base64(16)
            #operation generates a random 16-byte string
            return random_code unless ShortenedUrl.exists?(short_url: random_code)
            #only return code if it does not already exist
        end
    end 
    
    def self.create(user, long_url)
        #long_url, short_url, submitter_id
        ShortenedUrl.create!(
            submitter_id: user.id,
            long_url: long_url,
            short_url: ShortenedUrl.random_code
        )
        #The "new" method will return a new object while "create" will return the object AND save it to the database
        #grab short_url from the method created above
    end
end


# Write submitter and submitted_urls associations to ShortenedUrl and User.
