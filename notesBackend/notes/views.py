
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializers import *
# Create your views here.


@api_view(['GET'])
def getNotes(request):
    notes_obj = Note.objects.all()
    serializer = NoteSerializer(notes_obj, many=True)
    return Response({'status': 203, 'payload': serializer.data})


@api_view(['POST'])
def postNote(request):

    serializer = NoteSerializer(data=request.data)
    if not serializer.is_valid():
        return Response({"error": serializer.errors, "success": False}, status=403)
    serializer.save()
    return Response({'success': True, 'message': 'Your Note is Saved...!', 'payload': serializer.data})


@api_view(['DELETE'])
def deleteNote(request, id):
    try:
        note = Note.objects.get(id=id)
        note.delete()
        print("post deleted......................!")
        return Response({'status': 201, 'message': 'Note deleted successfully...!'})
    except Exception as e:
        return Response({'status': 403, 'error': f'Something went wrong {e}'})
