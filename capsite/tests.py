import unittest, django, os
from wagtail.test.utils import WagtailPageTestCase
from capsite.models import HomePage
from core.settings import dev as settings

env = os.environ.copy()
DJANGO_SETTINGS_MODULE = env['DJANGO_SETTINGS_MODULE']
django.setup()

class HomePageTests(WagtailPageTestCase):
    def test_can_create_page(self):
        new_page = HomePage(
            hero_text = "This is a test.",
            path = 'test',
            depth = 0,
            title = 'Test Page',
            slug = 'testing'

        )
        new_page.save()
    
    def test_can_navigate_to_page(self):
        new_page = HomePage(
            hero_text = "This is a test.",
            path = 'test',
            depth = 0,
            title = 'Test Page',
            slug = 'testing'

        )
        new_page.save()
        self.assertPageIsEditable(new_page)


    


if __name__ == '__main__':
    unittest.main()