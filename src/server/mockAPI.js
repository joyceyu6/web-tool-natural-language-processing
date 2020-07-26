// let json = {
//     'title': 'test json response',
//     'message': 'this is a message',
//     'time': 'now'
// }

// module.exports = json

from __future__ import print_function
import time
import aylien_news_api
from aylien_news_api.rest import ApiException
from pprint import pprint
configuration = aylien_news_api.Configuration()
